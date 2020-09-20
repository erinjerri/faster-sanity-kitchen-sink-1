export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f67c86d40a5fa012af721c6',
                  title: 'Sanity Studio',
                  name: 'faster-sanity-kitchen-sink-1-studio',
                  apiId: 'a3d09444-ff64-46ed-9420-682cb1ae32b8'
                },
                {
                  buildHookId: '5f67c86cd1843926cc289807',
                  title: 'Blog Website',
                  name: 'faster-sanity-kitchen-sink-1',
                  apiId: '8a06429e-5c28-40eb-a0b3-f09130037575'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/faster-sanity-kitchen-sink-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://faster-sanity-kitchen-sink-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
