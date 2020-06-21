import User from '@models/User'

test('It should be return an user', () => {
  const user = new User('david', 19)

  expect(user.name).toBe('david')
  expect(user.age).toBe(19)
  expect.assertions(2)
})
