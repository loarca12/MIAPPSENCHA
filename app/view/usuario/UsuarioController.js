Ext.define('MiAppSencha.view.usuario.UsuarioController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.usuarioctr',

    hacerLogin: function(){
        var formulario = this.lookupReference('formulario');

        if(formulario.isValid()){
            var datos = formulario.getValues();
            
            Ext.Ajax.request({
                url: `${Ext.manifest.url_backend}usuarios?email=${datos.email}&password=${datos.password}`,
                scope: this,
                success: function(response, opts) {
                    var usuarioValido = Ext.decode(response.responseText);
                    console.dir(usuarioValido);
                    if(usuarioValido.length > 0){
                        Ext.Msg.alert('Hola',"Bienvenido de nuevo " + usuarioValido[0].email,function(){
                            this.getView().close();
                        },this);
                    }else{
                        Ext.Msg.alert('Ingreso incorrecto',"el usuario o contraseña no son validos");
                    }
                    
                },
           
                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        }
    }
});