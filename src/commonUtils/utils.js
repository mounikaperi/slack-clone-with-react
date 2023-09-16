const menuItems = () => {
  return [
    {
      title: 'Channels',
      url: '/channels',
      submenu: [
        {
          title: 'Create',
          url: 'create',
          submenu: [
            {
              title: 'Create Channel',
              url: 'create-channel'
            },
            {
              title: 'Manage Section',
              url: 'manage-section'
            }
          ]
        },
        {
          title: 'Manage',
          url: 'manages',
          submenu: [
            {
              title: 'Manage section',
              url: 'create-channel'
            },
            {
              title: 'Manage All Channels',
              url: 'manage-section'
            }
          ]
        },
        {
          title: 'Show and Sort',
          url: 'showsort',
          submenu: [
            {
              title: 'Show All Channels',
              url: 'create-channel'
            },
            {
              title: 'Sort Alphabetically',
              url: 'manage-section'
            }
          ]
        }
      ]
    }
  ];
}

export default menuItems;