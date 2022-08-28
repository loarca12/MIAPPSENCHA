Ext.define('MiAppSencha.view.usuario.Usuario2',{
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'usuario',
    leyenda: 'usuario',
    controller: 'usuario',

    items: {
        region: 'center',
        layout: 'fit',
        xtype: 'grid',
        store: {type: 'usuarios'},
        title: 'Usuarios',
        columns: [
            {text: 'Id', dataIndex: 'id', align: 'center'},
            {text: 'Email', dataIndex: 'email', align: 'center', flex: 1},
            {text: 'Password', dataIndex: 'password', align: 'center', flex: 1},
        ],
        listeners: {
            itemcontextmenu: function(grid, record, item, Index, e){
                var contextMenu = Ext.create('Ext.menu.Menu',{
                    controller: 'usuario',
                    items:
                    [
                        {
                            text: 'Editar',
                            itemId: 'editar',
                            iconCls: 'x-fa fa-edit',
                            handler: function(){
                                this.fireEvent("editar",grid, Index)
                            }
                        },
                        {
                            text: 'Eliminar',
                            itemId: 'eliminar',
                            iconCls: 'x-fa fa-trash',
                            handler: function(){
                                this.fireEvent("eliminar",grid, Index)
                            }
                        }
                    ]
                });
                contextMenu.showAt(e.getXY());
                e.stopEvent();
            }
        }
        
    }
})