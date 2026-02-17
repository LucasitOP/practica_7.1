var request = require('supertest'),
    app = require('../app');

describe('GET', function(){
  it('respuesta contiene text/html', function(done){
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('respuesta contiene George Orwell', function(done){
    request(app)
      .get('/')
      .expect(/George Orwell/, done);
  });

  it('/api respuesta contiene json', function(done){
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('/api respuesta contiene objeto animales', function(done){
    request(app)
      .get('/api')
      .expect(200, {
        "cat": "meow",
        "dog": "bark",
        "eel": "hiss",
        "bear": "growl",
        "frog": "croak",
        "lion": "roar",
        "bird": "tweet",
        "turtle":"trrr",
        "perro": "guau"
      }, done);
  });
});
