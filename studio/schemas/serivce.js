export default{
    name:"service",
    title:"Service",
    type:"document",
    fields:[
        {
            name:"service_title",
            title:"Service Title",
            type:"string"
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
            name: 'body',
            title: 'Body',
            type: 'blockContent'
          },
          {
              name:'link',
              title:'URL',
              type:'string'
          }
    ]
}