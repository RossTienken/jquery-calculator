const expect = chai.expect

describe('calculate', function () {
  it('should be a function', function () {
    expect(calculate).to.be.a('function')
  })
  it('should subtract one number from another', function() {
    expect(calculate("10-5=")).to.equal(5)
  })
  it('should add two numbers together', function() {
    expect(calculate("10+5=")).to.equal(15)
  })
  it('multiply two numbers together', function() {
    expect(calculate("10x5=")).to.equal(50)
  })
  it('divide one number by another', function() {
    expect(calculate("10/5=")).to.equal(2)
  })
  it('should return an Error if number is diveded by 0', function() {
    expect(calculate("10/0=")).to.equal('Error')
  })
  it('should return an Error if equation has multiple operators', function() {
    expect(calculate("5/+0=")).to.equal('Error')
  })
})
