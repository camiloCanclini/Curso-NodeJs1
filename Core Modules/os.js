const os = require('os');

console.table({
    memoria_total_en_bytes: os.totalmem(),
    memoria_libre_en_bytes: os.freemem(),
    pid: os.getPriority(),
    ruta_del_usuario: os.homedir(),
    ruta_de_archivos_temporales: os.tmpdir(),
    nombre_del_equipo: os.hostname(),
    plataforma_sistema_operativo: os.platform(),
    tiempo_desde_que_se_encendio_pc: os.uptime(),
});

console.log('Información del adaptador de red del Equipo');
console.log('os.networkInterfaces():', os.networkInterfaces())
console.log('Información del Usuario');
console.log('os.userInfo():', os.userInfo())