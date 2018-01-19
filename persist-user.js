const userId = Accounts.userId()

if (userId) {

  Accounts.users.attachPersister({ _id: userId })

  const persistedUser = new ReactiveVar(null)

  Accounts.users.getPersisted(userId).then(user => {

    user._id = userId

    persistedUser.set(user)
  })

  Accounts.user = function () {

    let user = userId ? this.users.findOne(userId) : null

    if (!user)
      user = persistedUser.get()

    return user
  }
}
