Ext.define('MiAppSencha.view.usuario.VentanaUsuario',{
    extend: 'MiAppSencha.view.FormBase',
    title: 'Agregar Usuario',
    controller: 'usuario',

    layout:{
        type: 'vbox',
        align: 'center'
    },
    items:[
        {
            xtype: 'form',
            bodyPadding: 10, 

            defaults: {
                xtype: 'textfield',
                width: 250,
                marginTop: 50,
            },

            fieldDefaults:{
                msgTarget: 'under',
                anchor: '100%',
                allowBlank: false
            },

            items:[
                {
                    name: "id",
                    itemId: "id",
                    hidden: true,
                    allowBlank: true,
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    itemId: 'email'
                },
                {
                    fieldLabel: 'Password',
                    name: 'password',
                    itemId: 'password'
                }
            ]
        }
    ]
})