


export default [
    {
        id:0,
        type:'Header',
        templateName:'BigHeader',
        elements:{
            title: {
                type:'text',
                value:'Big Header',
                styles: {
                    color:'#000000',
                    fontSize:'30px',
                }
            },
            p: {
                type:'text',
                value:'Header 1',
                styles:{
                    color:'#000000',
                    fontSize:'45px',
                }
            }
        }
    },
    {
        id:1,
        type:'Header',
        templateName:'SmallHeader',
        elements:{
            title:{
                type:'text',
                value:'Small Header',
                styles:{
                    color:'#000000',
                    fontSize:'40px'
                }
            },
            p:{
                type:'text',
                value:'small header parragraph',
                styles:{
                    textAlign:'center'
                }
            },
            image:{
                type:'image',
                source:'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/Escuela-para-cachorros-768x512.jpeg',
                alt:'kimetsu no yaiba img'
            }
        }
    },
    {
        id:2,
        type:'Header',
        templateName:'DialoHeader',
        elements:{
            title: {
                type:'text',
                value:'DIALO B&M',
                styles: {
                    color:'#000000',
                }
            },
            description: {
                type:'text',
                value:'Damos valor con soluciones simples, ágiles, flexibles y escalables, integrando calidad humana y tecnologia de avanzada',
                styles:{
                    color:'#000000'
                }
            },
            button:{
                type:'text',
                value:'Agenda una consulta',
                styles:{
                    width:'256px',
                    height: '16px',
                    borderRadius:'34px',
                    border: '1px solid black',
                    backgroundColor: '#eeeeee',
                    color: '#000000',
                    fontWeight: 'light',
                    marginTop: '16px'
                }
            }
        }
    },
    {
        id:3,
        type:'About',
        templateName:'DialoAbout',
        elements:{
            title: {
                type:'text',
                value:'Acerca de nosotros',
                styles: {
                    color:'#000000'
                }
            },
            start: {
                type:'text',
                value:'OFRECEMOS ',
                styles:{
                    color:'#000000'
                }
            },
            firstChange:{
                type:'text',
                value:'CALIDAD DE IDEAS. ',
                styles:{
                    color:'#72b60d'
                }
            },
            middle:{
                type:'text',
                value:'NUESTRO TRABAJO INICIA CON EL CONOCIMIENTO DEL MERCADO. NOS INVOLUCRAMOS PARA ENTENDER EL NEGOCIO DEL CLIENTE Y ESTAMOS CAPACITADOS PARA OFRECERLE ',
                styles:{
                    color:'000000#'
                }
            },
            secondChange:{
                type:'text',
                value:'ESTRATEGIAS ',
                styles:{}
            },
            end:{
                type:'text',
                value:'DE CONTENIDO QUE LOGREN CONECTAR CON SU AUDIENCIA CLAVE.',
                styles:{}
            }
        }
    },
    {
        id:4,
        type:'Carousel',
        templateName:'ImageCarousel',
        elements:{
            text1:{
                type:'img',
                value:'https://www.egames.news/__export/1651693010218/sites/debate/img/2022/05/04/arena_of_valor_y_demon_slayer_kimetsu_no_yaiba_unen_fuerzas_en_su_mxs_reciente_colaboracixn.jpg_242310155.jpg',
                styles:{

                }
            },
            text2:{
                type:'img',
                value:'https://skdesu.com/wp-content/uploads/2021/05/kimetsu-no-yaiba.jpg',
                styles:{

                }
            },
            text3:{
                type:'img',
                value:'https://img.asmedia.epimg.net/resizer/m5z2sqyj2WiBff9zFBSmUpKbB8w=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LLW5WAZY2BITTN4HPDRWL7CIFY.jpg',
                styles:{

                }
            }
        }
    },
    {
        id:5,
        type:'Header',
        templateName:'BigHeader',
        elements:{
            title: {
                type:'text',
                value:'Section 0',
                styles: {
                    color:'#c81e1e',
                    fontSize:30
                }
            },
            p: {
                type:'text',
                value:'modified',
                styles:{
                    color:'#2cb3ce'
                }
            }
        }
    },
    {
        id:6,
        type:'Header',
        templateName:'BigHeader',
        elements:{
            title: {
                type:'text',
                value:'Section 0',
                styles: {
                    color:'#c81e1e',
                    fontSize:30
                }
            },
            p: {
                type:'text',
                value:'modified',
                styles:{
                    color:'#2cb3ce'
                }
            }
        }
    },
    {
        id:7,
        type:'Header',
        templateName:'DialoHeader',
        elements:{
            title: {
                type:'text',
                value:'DIALO B&M',
                styles: {
                    color:'#000000',
                }
            },
            description: {
                type:'text',
                value:'Damos valor con soluciones simples, ágiles, flexibles y escalables, integrando calidad humana y tecnologia de avanzada',
                styles:{
                    color:'#000000'
                }
            },
            button:{
                type:'text',
                value:'Agenda una consulta',
                styles:{
                    width:'256px',
                    height: '16px',
                    borderRadius:'34px',
                    border: '1px solid black',
                    backgroundColor: '#eeeeee',
                    color: '#000000',
                    fontWeight: 'light',
                    marginTop: '16px'
                }
            }
        }
    }
]

