
describe('구글 메인 페이지', function() {

  before(function(client, done) {
      done();
  });

  after(function(client, done) {
      done();
  });

  describe('##사용자는 검색할 수 있다.', function() {
      it('사용자는 검색어를 입력 결과를 볼 수 있다.', function(client, done) {
          client
              .url('http://www.google.com')
              .waitForElementVisible('body', 1000)
              .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
              .pause(1000)
              .end(done);
      });
  });
});