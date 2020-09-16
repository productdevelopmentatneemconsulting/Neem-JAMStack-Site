export default {
    name: 'client',
    title: 'Client',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name:'preview',
        title:'Client Preview Image',
        type:'image',
        options:{
          hotspot:true
        }
      },
      {
        name: 'image1',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'image2',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'image3',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'preview'
      }
    }
  }
