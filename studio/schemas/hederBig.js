export default{
    name:'headerBig',
    title:'Big Hero',
    type:'document',
    fields:[
        {
            name:'pageText',
            title:'Page',
            type:'string'
        },
        {
            name:'tagline',
            title:'tagline',
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
        },
        {
            name:'headerSubTitle',
            title:'Sub Title',
            type:'string',

        }
    ],
    preview:{
        select:{
            title:'pageText',
            media:'headerImage'
        }

    }
}