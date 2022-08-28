Ext.define('MiAppSencha.view.empresa.VentanaEmpresa',{
    extend: 'MiAppSencha.view.FormBase',
    controller: 'empresa',

    title: 'Agregar Empresa',
    

   

    layout:{
        type: 'vbox',
        align: 'middle'
    },

    items:[
        {
            xtype: 'form',
            bodyPadding: 10,

            defaults: {
                xtype: 'textfield',
                allowBlank: false
            },

            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 110,
                msgTarget: 'under',
                anchor: '100%'
            },

            items:[
                {
                    name: 'id',
                    itemId: 'id',
                    hidden: true,
                    allowBlank: true
                },
                {
                    fieldLabel: 'Nombre',
                    name: 'nombre'
                },
                {
                    xtype: 'datefield',
                    format: 'm/d/y',
                    fieldLabel: 'Fecha de Inicio',
                    name: 'fechaInicio',
                    maxValue: new Date(),
                },
                {
                    xtype: 'timefield',
                    fieldLabel: 'Hora de Inicio',
                    name: 'horaInicio',
                    increment: 20
                },
                {
                    fieldLabel: 'Direccion',
                    name: 'direccion'
                }
            ]
        }
    ],

    
})