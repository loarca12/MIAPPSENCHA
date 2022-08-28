Ext.define('MiAppSencha.view.usuario.UsuarioController2',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario',

    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.usuario.VentanaUsuario');
        window.show();
    },

    enviarDatos: function(){
        var vista = this.getView();
        var formulario = vista.down('form');

        if(formulario.isValid()){
            var datos = formulario.getValues();
            if(vista.title !== "Editar usuario"){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'usuarios',
                    jsonData: Ext.util.JSON.encode(datos),
                    scope: vista,
                    success: function(response, opts){
                        console.log(datos);
                        Ext.Msg.alert('Ok','Usuario creado correctamente', function(){
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
                    url: Ext.manifest.url_backend + 'usuarios/' + id,
                    jsonData: Ext.util.JSON.encode(datos),
                    method: 'PUT',

                    success: function(response, opts){
                        Ext.Msg.alert("Ok","Usuario editado correctamente", function(){
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
        var usuario = vista.store
        if(usuario){
            vista.setTitle("Editar usuario")
            vista.down("form").getForm().setValues(usuario)
        }
    },

    onEditar: function(grid, rowIndex){
        var usuario = grid.getStore().getAt(rowIndex).data
        var formulario = Ext.create('MiAppSencha.view.usuario.VentanaUsuario',{
            store: usuario
        })

        formulario.show()
    },
    onEliminar: function(grid, rowIndex){
        var usuario = grid.getStore().getAt(rowIndex).data
        Ext.Msg.confirm("Eliminar usuario","¿Seguro que desea eliminar este telefono?",function(respuesta){
            if(respuesta == "yes"){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'usuarios/' + usuario.id,
                    method: 'DELETE',

                    success: function(response, opts){
                        Ext.Msg.alert("Ok","Usuario eliminado correctamente", function(){
                            Ext.getStore('usuarios-listado').reload();
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
        Ext.getStore('usuarios-listado').reload();
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