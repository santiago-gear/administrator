import { advancedcard } from './../data/advancedcard';




const blanco = {
    id:0,
    type:'Blank',
    templateName:'Blank',
    columnas:[
        {
            titulo: {
            type:'text',
            value:'<h1> Big <em>Header</em> </h1>',
            styles: {
                color:'#000000',
                fontSize:'30px',
                }
            },
            description:{
                type:'text',
                value:'<h1> Big Header </h1>',
                styles: {
                color:'#000000',
                fontSize:'30px',
                }
            },
            image:{
                type:'image',
                source:'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/Escuela-para-cachorros-768x512.jpeg',
                alt:'perritos jugando',
                styles: {
                }
            }
        }
    ],
    styles:{

    }
}

export default {
    BigHeader:{
        id:0,
        type:'Header',
        templateName:'BigHeader',
        elements:{
            title: {
                type:'text',
                value:'<h1> Big Header </h1>',
                styles: {
                    color:'#000000',
                    fontSize:'30px',
                }
            },
            p: {
                type:'text',
                value:'<h1>Header 1</h1>',
                styles:{
                    color:'#000000',
                    fontSize:'45px',
                }
            },
            background:{
                type:'background',
                styles: {
                },
            }
        },
        
    },
    SmallHeader:{
        id:1,
        type:'Header',
        templateName:'SmallHeader',
        elements:{
            title:{
                type:'text',
                value:'<h1>Small Header</h1>',
                styles:{
                    color:'#000000',
                    fontSize:'40px'
                }
            },
            p:{
                type:'text',
                value:'<p>small header parragraph</p>',
                styles:{
                    textAlign:'center'
                }
            },
            image:{
                type:'image',
                source:'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/Escuela-para-cachorros-768x512.jpeg',
                alt:'perritos jugando'
            },
            background:{
                type:'background',
                styles:{
                    backgroundColor: '#FFFFFF',
                }
            }
        },
        
    },
    Gallery:{
        id:2,
        type:'Gallery',
        templateName:'Gallery',
        elements:{
            images:{
                type:'image-array',
                content:[
                    {
                        type:'image',
                        source:'https://www.egames.news/__export/1651693010218/sites/debate/img/2022/05/04/arena_of_valor_y_demon_slayer_kimetsu_no_yaiba_unen_fuerzas_en_su_mxs_reciente_colaboracixn.jpg_242310155.jpg',
                        alt:'titulo 1'
                    },
                    {
                        type:'image',
                        source:'https://skdesu.com/wp-content/uploads/2021/05/kimetsu-no-yaiba.jpg',
                        alt:'titulo 2'
                    },
                    {
                        type:'image',
                        source:'https://img.asmedia.epimg.net/resizer/m5z2sqyj2WiBff9zFBSmUpKbB8w=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LLW5WAZY2BITTN4HPDRWL7CIFY.jpg',
                        alt:'titulo 3'
                    },
                    {
                        type:'image',
                        source:'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/Escuela-para-cachorros-768x512.jpeg',
                        alt:'perritos jugando'
                    }
                ],
            },
            background:{
                type:'background',
                styles: {
                },
            }
        }
    },
    TestimonialSlider:{
        id:2,
        type:'Slider',
        templateName:'TestimonialSlider',
        elements:{
            array:{
                type:'text-array',
                content:[
                    {
                      name: "daniel",
                    },
                    {
                      name: "josue",
                    },
                    {
                      name: "durán",
                    },
                ]
            }
        }
    },
    Accordion:{
        id:3,
        type:'Accordion',
        templateName:'Accordion',
        elements:{
            array:[
                    {
                        title: {
                            type:'text',
                            text:'Titulo 1',
                            styles:{}
                        },
                        p:{
                            type:'text',  
                            value:"<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>",
                            styles:{}
                        },
                        image:{
                            type:'image',
                            source:'',
                            alt:'',
                            styles:{}
                        },
                    },
                    {
                        title: {
                            type:'text',
                            text:'Titulo 2',
                            styles:{}
                        },
                        p:{
                            type:'text',  
                            value:'',
                            styles:{}
                        },
                        image: {
                            type:'image',
                            source:"https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                            alt:"Texto alternativo",
                            styles:{}
                        },
                    },
                    {
                        title: {
                            type:'text',
                            text:'Titulo 3',
                            styles:{}
                        },
                        p:{
                            type:'text',  
                            value:"<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>",
                            styles:{}
                        },
                        image: {
                            type:'image',
                            source:"https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                            alt:"Texto alternativo",
                            styles:{}
                        },  
                    },
                  ]
            
        }
    },
    AdvancedCard:{
        id:4,
        type:'AdvancedCard',
        templateName:'AdvancedCard',
        elements:{
            image:{
                type:'image',
                source:"https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                alt:'Texto alt',
            },
            title:{
                type:'text',
                value:"Advanced <span style='color:red'>Card</span>"
            },
            subtitle:{
                type:"text",
                value:"Advanced <span style='color:red'>Card</span>"
            },
            description:{
                type:'text',
                value:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
            },
            footer:{
                type:'text',
                value:"Footer"
            },
        }
    },
    Blank:{
        id:5,
        type:'Blank',
        templateName:'Blank',
        elements:{
            array:[
                {
                    title: {
                        type:'text',
                        value:"<h1>Titulo</h1>"
                    },
                    description:{
                        type:'text',
                        value:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit ornare sapien ac feugiat. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. </p>",
                    },
                    image: {
                        type:'image',
                        source: "",
                        alt: "Texto alternativo",
                    },
                    styles:{}
                },
                {
                    title: {
                        type:'text',
                        value:"<h1>Titulo</h1>"
                    },
                    description:{
                        type:'text',
                        value:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit ornare sapien ac feugiat. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. </p>",
                    },
                    styles:{}
                },
            ],
            styles:{
                backgroundColor:'#000000'
            }
        }
    },
    Divider:{
        id:3,
        type:'Divider',
        templateName:'Divider',
        elements:{}
    },
    Fieldset:{
        id:4,
        type:'Fieldset',
        templateName:'Fieldset',
        elements:{
            title: {
                type:'text',
                value:"Fieldset"
            },
            image: {
                type:'image',
                source:"https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                alt:"Texto alternativo"
            },
            p:{
                type:'text',
                value:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
            },
        }
    },
    Panel:{
        id:5,
        type:'Panel',
        templateName:'Panel',
        elements:{
            title:{
                type:'text',
                value:"Header"
            },
            p:{
                type:'text',
                value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        }
    },
    SimpleCard:{
        id:6,
        type:'SimpleCard',
        templateName:'SimpleCard',
        elements:{
            title:{
                type:'text',
                value:"Simple Card"
            },
            description:{
                type:'text',
                value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        }
    },
    TabView:{
        id:7,
        type:'TabView',
        templateName:'TabView',
        elements:{
            array:[
                    {
                        title: 'Tab 1',
                        image: {
                            source: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                            alt: ""
                        }, 
                        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget metus a mi dapibus placerat. Mauris id metus porta, vulputate nisi dignissim, tristique felis. Praesent posuere lacus sed quam accumsan elementum. Cras commodo tellus nec diam faucibus, imperdiet fringilla lacus tempor. Nulla volutpat tortor non felis malesuada sodales. Proin ac scelerisque justo. In pretium dolor vel placerat interdum. Proin bibendum nunc in sodales hendrerit. Suspendisse vestibulum ipsum quis orci dignissim commodo. Donec euismod laoreet nibh, eu placerat justo imperdiet sit amet. Nullam porta faucibus nisl sed blandit. In sed mollis ante. Nunc elit velit, varius et lectus at, feugiat vehicula tortor. Fusce dictum nisl suscipit leo consequat, a rutrum ligula consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tempus condimentum lacus. Donec iaculis, quam fringilla dignissim dictum, metus eros pharetra tellus, a faucibus odio turpis eu risus. Nunc pretium, justo nec ornare tincidunt, quam augue dictum odio, ac pharetra nunc mauris non lacus.'
                    },
                    {
                        title: 'Tab 2', image: {
                            source: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                            alt: ""
                        },
                        p: 'Tab 2 Content'
                    },
                    {
                        title: 'Tab 3', image: {
                            source: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                            alt: ""
                        },
                        p: '<p style="color:red">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget metus a mi dapibus placerat. Mauris id metus porta, vulputate nisi dignissim, tristique felis. Praesent posuere lacus sed quam accumsan elementum. Cras commodo tellus nec diam faucibus, imperdiet fringilla lacus tempor. Nulla volutpat tortor non felis malesuada sodales. Proin ac scelerisque justo. In pretium dolor vel placerat interdum. Proin bibendum nunc in sodales hendrerit. Suspendisse vestibulum ipsum quis orci dignissim commodo. Donec euismod laoreet nibh, eu placerat justo imperdiet sit amet. Nullam porta faucibus nisl sed blandit. In sed mollis ante. Nunc elit velit, varius et lectus at, feugiat vehicula tortor. Fusce dictum nisl suscipit leo consequat, a rutrum ligula consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tempus condimentum lacus. Donec iaculis, quam fringilla dignissim dictum, metus eros pharetra tellus, a faucibus odio turpis eu risus. Nunc pretium, justo nec ornare tincidunt, quam augue dictum odio, ac pharetra nunc mauris non lacus.</p>'
                    }
                ]
            
        }
    }
}



/* 

DialoHeader:{
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
                type:'button',
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
            },
            background:{
                
            }
        },
    },
    DialoAbout:{
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
    },*/