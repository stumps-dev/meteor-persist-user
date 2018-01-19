Package.describe({
  name: 'stumps:persist-user',
  version: '1.0.0',
  summary: 'Persist the logged-in user for offline use.',
  git: 'https://github.com/stumpss/meteor-persist-user',
  documentation: 'README.md'
})

Package.onUse(function (api) {

  api.use([
    'accounts-base@1.0.0',
    'reactive-var@1.0.1',
    'stumps:persist-collection@1.1.0'
  ])

  api.addFiles('persist-user.js', 'client')
})
