export default{
    name:'policy',
    title:'Policy',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name of the Policy',
            type:'string'
        },
        {
            name:'heading',
            title:'Heading',
            type:'string'
        },
        {
            name:'slug',
            title:'slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:96
            }
        },
        {
            name:'body',
            title:'Policy Text ',
            type:'blockContent'
        }
    ],
    preview:{
        select:{
            title:'name'
        }
    }
}