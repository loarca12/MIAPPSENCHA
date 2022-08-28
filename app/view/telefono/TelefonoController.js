Ext.define('MiAppSencha.view.telefono.TelefonoController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.telefono',

    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.telefono.VentanaTelefono');
        window.show();
    },

    enviarDatos: function(){
        var vista = this.getView();
        var formulario = vista.down('form');

        if(formulario.isValid()){
            var datos = formulario.getValues();
            if(vista.title !== "Editar telefono"){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'telefonos',
                    jsonData: Ext.util.JSON.encode(datos),
                    scope: vista,
                    success: function(response, opts){
                        console.log(datos);
                        Ext.Msg.alert('Ok','Telefono creado correctamente', function(){
                            vista.close();
                        })
                    },
                    failure: function(response, opts){
                        console.log('El servidor falló con el código ' + response.status);
                    }
                })
            }else{
                var id = vista.down("#id").value
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'telefonos/' + id,
                    jsonData: Ext.util.JSON.encode(datos),
                    method: 'PUT',

                    success: function(response, opts){
                        Ext.Msg.alert("Ok","Telefono editado correctamente", function(){
                            vista.close()
                        })
                    },
                    failure: function(response, opts){
                        console.log('El servidor falló con el código ' + response.status);
                    }
                })
            }
        }
    },
    llenarDatos: function(){
        var vista = this.getView()
        var telefono = vista.store
        if(telefono){
            vista.setTitle("Editar telefono")
            vista.down("form").getForm().setValues(telefono)
        }
    },

    onEditar: function(grid, rowIndex){
        var telefono = grid.getStore().getAt(rowIndex).data
        var formulario = Ext.create('MiAppSencha.view.telefono.VentanaTelefono',{
            store: telefono
        })

        formulario.show()
    },
    onEliminar: function(grid, rowIndex){
        var telefono = grid.getStore().getAt(rowIndex).data
        Ext.Msg.confirm("Eliminar telefono","¿Seguro que desea eliminar este telefono?",function(respuesta){
            if(respuesta == "yes"){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'telefonos/' + telefono.id,
                    method: 'DELETE',

                    success: function(response, opts){
                        Ext.Msg.alert("Ok","Telefono eliminado correctamente", function(){
                            Ext.getStore('telefonos-listado').reload();
                        })
                    },
                    failure: function(response, opts){
                        console.log('El servidor falló con el código ' + response.status);
                    }
                })
            }
        })
    },

    reloadStore: function(){
        Ext.getStore('telefonos-listado').reload();
    },

    control: {
        '#editar': {
            editar: "onEditar",   
        },
        '#eliminar':{
            eliminar: "onEliminar"
        }
    }
});