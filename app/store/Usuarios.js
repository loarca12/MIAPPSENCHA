Ext.define('MiAppSencha.store.Usuarios',{
    extend: 'Ext.data.Store',
    alias: 'store.usuarios',
    storeId: 'usuarios-listado',
    requires: ['Ext.data.proxy.JsonP'],

    proxy:{
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'usuarios',

        reader:{
            type: 'json'
        }
    },
    autoLoad: true
})