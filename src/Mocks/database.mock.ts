
export default {
    BigHeader: {
        id: 0,
        type: 'Header',
        templateName: 'BigHeader',
        properties: {
            sectionID: '',
        },
        elements: {
            title: {
                type: 'text',
                value: '<h1> Big Header </h1>',
                styles: {
                }
            },
            p: {
                type: 'text',
                value: '<h1>Header 1</h1>',
                styles: {
                    color: '#000000',
                    fontSize: '45px',
                }
            },
            background: {
                type: 'background',
                styles: {
                },
            }
        },

    },
    SmallHeader: {
        id: 1,
        type: 'Header',
        templateName: 'SmallHeader',
        properties: {
            sectionID: ''
        },
        elements: {
            title: {
                type: 'text',
                value: '<h1>Small Header</h1>',
                styles: {
                    color: '#000000',
                    fontSize: '40px'
                }
            },
            p: {
                type: 'text',
                value: '<p>small header parragraph</p>',
                styles: {
                    textAlign: 'center'
                }
            },
            image: {
                type: 'image',
                source: 'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/Escuela-para-cachorros-768x512.jpeg',
                alt: 'perritos jugando'
            },
            background: {
                type: 'background',
                styles: {
                    backgroundColor: '#FFFFFF',
                }
            }
        },

    },
    Gallery: {
        id: 2,
        type: 'Gallery',
        templateName: 'Gallery',
        properties: {
            sectionID: ''
        },
        elements: {
            images: {
                type: 'image-array',
                content: [
                    {
                        type: 'image',
                        source: 'https://www.egames.news/__export/1651693010218/sites/debate/img/2022/05/04/arena_of_valor_y_demon_slayer_kimetsu_no_yaiba_unen_fuerzas_en_su_mxs_reciente_colaboracixn.jpg_242310155.jpg',
                        alt: 'titulo 1'
                    },
                    {
                        type: 'image',
                        source: 'https://skdesu.com/wp-content/uploads/2021/05/kimetsu-no-yaiba.jpg',
                        alt: 'titulo 2'
                    },
                    {
                        type: 'image',
                        source: 'https://img.asmedia.epimg.net/resizer/m5z2sqyj2WiBff9zFBSmUpKbB8w=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LLW5WAZY2BITTN4HPDRWL7CIFY.jpg',
                        alt: 'titulo 3'
                    },
                    {
                        type: 'image',
                        source: 'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/Escuela-para-cachorros-768x512.jpeg',
                        alt: 'perritos jugando'
                    }
                ],
            },
            background: {
                type: 'background',
                styles: {
                },
            }
        }
    },
    Accordion: {
        id: 3,
        type: 'Accordion',
        templateName: 'Accordion',
        properties: {
            sectionID:'',
            restrictions:{
                max:5,
                min:1,
            }
        },
        elements: [
            {
                title: {
                    type: 'text',
                    text: 'Titulo 1',
                    styles: {
                    }
                },
                p: {
                    type: 'text',
                    value: "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>",
                    styles: {
                    }
                },
                image: {
                    type: 'image',
                    source: '',
                    alt: '',
                },
                background: {
                    type: 'background',
                    styles: {
                        color:'#000000'
                    },
                }
            },
            {
                title: {
                    type: 'text',
                    text: 'Titulo 2',
                    styles: {}
                },
                p: {
                    type: 'text',
                    value: '',
                    styles: {}
                },
                image: {
                    type: 'image',
                    source: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                    alt: "Texto alternativo",
                },
                background: {
                    type: 'background',
                    styles: {
                        color:'#000000'
                    },
                }
            },
            {
                title: {
                    type: 'text',
                    text: 'Titulo 3',
                    styles: {}
                },
                p: {
                    type: 'text',
                    value: "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>",
                    styles: {}
                },
                image: {
                    type: 'image',
                    source: "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
                    alt: "Texto alternativo",
                },
                background: {
                    type: 'background',
                    styles: {
                        color:'#000000'
                    },
                }
            },
        ]


    },
    Blank: {
        id: 5,
        type: 'Blank',
        templateName: 'Blank',
        properties: {
            sectionID:'',
            restrictions:{
                max:3,
                min:1,
            }
        },
        elements: [
            {
                title: {
                    type: 'text',
                    value: "<h1>Titulo 2</h1>",
                    styles: {}
                },
                description: {
                    type: 'text',
                    value: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit ornare sapien ac feugiat. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. Nunc tempus magna tincidunt, porttitor diam eget, placerat velit. Ut velit neque, hendrerit nec elementum id, semper ac tellus. Vivamus non tellus non eros vestibulum blandit eu sed nunc. </p>",
                    styles: {}
                },
                image: {
                    type: 'image',
                    source: "",
                    alt: "",
                },
                background: {
                    type: 'background',
                    styles: {
                    },
                }
            },
        ]
    },
    SimpleCard: {
        id: 6,
        type: 'SimpleCard',
        templateName: 'SimpleCard',
        properties: {
            sectionID:'',
            restrictions:{
                max:5,
                min:1,
            }
        },
        elements: [
            {
                image: {
                    type:'image',
                    source: "https://4.bp.blogspot.com/-YxKJxL_qzvQ/XUZAOEHwiZI/AAAAAAAAmYs/lAnqYsvs_L0aJEkOVZc2KS2m-PuzNDOFQCLcBGAs/w1280-h720-p-k-no-nu/episodio-one-piece-sin-relleno.jpg",
                    alt: "mi imagen"
                },
                title: {
                    type:'text',
                    value: "Prueba title",
                    styles: {
                    },
                },
                description: {
                    type:'text',
                    value: "Prueba description",
                    styles: {
                    },
                }
            },
        ]
    },
    TabView: {
        id: 7,
        type: 'TabView',
        templateName: 'TabView',
        properties: {

        },
        elements: {
            array: [
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
    },
    Carousel: {
        id: 7,
        type: 'Carousel',
        templateName: 'Carousel',
        properties: {
            section:'',
            options:{
                type:'options',
                numVisible: 3,
                width: '400px',
                height: '400px',
                circular: true,
                autoplay: 3000,
                indicators: true
            },
            restrictions:{
                min:1
            }
        },
        elements: [
                {
                    image:{
                        type:'image',
                        source: "https://c4.wallpaperflare.com/wallpaper/255/7/766/fan-art-fantasy-art-berserk-anime-griffith-hd-wallpaper-preview.jpg",
                        alt: "mi imagen de carousel"
                    }
                },
                {
                    image:{
                        type:'image',
                        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkYSekomhNReRxATXC1cRhsDUUphM_6eX_A&usqp=CAU",
                        alt: "mi imagen de carousel"
                    }
                },
                {
                    image:{
                        type:'image',
                        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkYSekomhNReRxATXC1cRhsDUUphM_6eX_A&usqp=CAU",
                        alt: "mi imagen de carousel"
                    }
                },
                {
                    image:{
                        type:'image',
                    source: "data:image/jpeg;base64,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",
                    alt: "mi imagen de carousel"
                    }
                },
                {
                    image:{
                        type:'image',
                    source: "data:image/jpeg;base64,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",
                    alt: "mi imagen de carousel"
                    }
                },
                {
                    image:{
                        type:'image',
                    source: "data:image/jpeg;base64,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",
                    alt: "mi imagen de carousel"
                    }
                }
            ],
            
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
