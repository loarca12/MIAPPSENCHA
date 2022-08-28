Ext.define('MiAppSencha.store.Telefonos',{
    extend: 'Ext.data.Store',
    alias: 'store.telefonos',
    storeId: 'telefonos-listado',
    requires: ['Ext.data.proxy.JsonP'],

    proxy:{
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'telefonos',

        reader:{
            type: 'json'
        }
    },
    autoLoad: true
})