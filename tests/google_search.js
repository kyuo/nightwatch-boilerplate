module.exports = {
    'Demo test Google' : function (client) {
      client
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
        .pause(1000)
        .end()
    }
  }
  