class TestRunner {
  static totalTest = 0
  static totalPass = 0

  constructor (name, passed) {
    this.name = name
    TestRunner.totalTest++ // 1

    if (passed) {
      TestRunner.totalPass++
    }
  }

  non_static_display () {
    return this.name
  }

  static summary () {
    return TestRunner.totalPass + '/' + TestRunner.totalTest + ' passed'
  }
}

// Flow of the Amazon Website
new TestRunner('Login', true)
new TestRunner('Signup', false)
new TestRunner('Cart', true)
new TestRunner('Checkout', true)

console.log(TestRunner.summary())//3/4 passed

// You call static with ClassName.method(), NOT object.method().
