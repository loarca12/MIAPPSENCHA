Ext.define('MiAppSencha.view.FormBase',{
    extend: 'Ext.window.Window',

    height: 225,
    width: 400,
    modal: true,
    draggable: false,
    resizable: false,

    buttonAlign: 'center',
    xtype: 'ventana',

    buttons: [
        {
            text: 'Enviar',
            handler: 'enviarDatos'
        }
    ],
    listeners:{
        close: 'reloadStore',
        show: 'llenarDatos'
    }
    }
    
)