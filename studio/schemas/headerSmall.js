export default{
    name:'headerSmall',
    title:'Small Hero',
    type:'document',
    fields:[
        {
            name:'pageText',
            title:'Page',
            type:'string'
        },
        {
            name:'breadcrumb',
            title:'Breadcrumb',
            type:'string'
        },
        {
            name:'headerText',
            title:'Header Text',
            type:'string'
        },
        {
            name:'headerImage',
            title:'Header Image',
            type:'image',
            options:{
                hotspot:true
            }
        }
    ],
    preview:{
        select:{
            title:'pageText',
            media:'headerImage'
        }

    }
}