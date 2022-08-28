Ext.define('MiAppSencha.view.telefono.ComboEmpleados',{
    extend: 'Ext.form.ComboBox',

    xtype: 'comboempleados',
    fieldLabel: 'Empleado',
    store: {type: 'empleados'},
    displayField: 'nombre',
    valueField: 'id'
})