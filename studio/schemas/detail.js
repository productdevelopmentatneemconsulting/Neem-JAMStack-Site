export default{
    name:'detail',
    title:'Detail',
    type:'document',
    fields:[
        {
            name:'pageHeader',
            title:'Page',
            type:'string'
        },
        {
            name:'headerText',
            title:'Header' ,
            type:'string'
        },{
            name:'tagline',
            title:'Tagline',
            type:'string'
        },
        {
            name:'description',
            title:'description',
            type:'blockContent'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'pageHeader',
              maxLength: 96
            }
          },
        {
            name:'redirectLink',
            title:'Redirect',
            type:'string'
        },
        {
            name:'imageShow',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }
    ],
    preview: {
        select: {
          title: 'pageHeader',
          media: 'imageShow'
        }
      }
}