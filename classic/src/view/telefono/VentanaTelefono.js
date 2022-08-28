Ext.define('MiAppSencha.view.telefono.VentanaTelefono',{
    extend: 'MiAppSencha.view.FormBase',
    title: 'Agregar Telefono',
    controller: 'telefono',

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
                    fieldLabel: 'Tipo',
                    name: 'tipo',
                    itemId: 'tipo'
                },
                {
                    fieldLabel: 'Pais',
                    name: 'pais',
                    itemId: 'pais'
                },
                {
                    fieldLabel: 'Numero',
                    name: 'numero',
                    itemId: 'numero'
                },
                {
                    xtype: 'comboempleados',
                    name: 'empleado',
                    itemId: 'empleado',
                    editable: false
                }

            ]
        }
    ]
})