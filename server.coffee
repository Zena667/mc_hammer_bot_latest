Bot = require './bot'
express = require 'express'

bluetooth = true
moch = ( process.argv.indexOf("--dry-run") != -1 );

if bluetooth
  opts = 
    port: "/dev/tty.FireFly-FC8C-RNI-SPP"
    baud: 115200
else
  opts = 
    port: "/dev/tty.usbserial-A9007MTf"
    baud: 9600

opts.moch = moch

bot = new Bot(opts)

bot.connect()

# callibration = {a: 1, s: 1, d: 1, f: 1}

bindings =
  forward: {a: +1, s: +1, d: +1, f: +1}
  turn: {a: +1, s: -1, d: +1, f: -1}
  strafe: {a: +1, s: -1, d: -1, f: +1}

motionControlSettings = { forward: 0, turn: 0, strafe: 0 }

app = express()
app.use express.bodyParser()
app.enable("jsonp callback")

app.get '/motors', (req, res) ->
  res.jsonp bot.motorOutputs

app.get '/motion-control', (req, res) ->
  res.jsonp motionControlSettings

app.get '/motion-control/update', (req, res) ->
  motorOutputs = {}
  data = req.query
  console.log data

  motorOutputs = {}

  # Computing the motor outputs from the json per-axis inputs
  for axis, b of bindings
    for k, dir of b
      motionControlSettings[axis] = ( data[axis] || 0 )
      motorOutputs[k] = ( motorOutputs[k] || 0 ) + ( data[axis] || 0 ) * dir

  # Binding the motor's output to a range of -1 to +1
  motorOutputs[motor] = Math.min( +1, Math.max(-1, v) )*10 for motor, v of motorOutputs

  # Updating the motors
  bot.set_motor motor, to: v for motor, v of motorOutputs

  res.jsonp("ACK");


app.listen(8071)
console.log('Listening on port 8071')
