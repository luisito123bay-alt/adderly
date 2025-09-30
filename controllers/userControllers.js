exports.getAllUsers = (req, res) => {
    console.log("Accediendo a todos los usuarios");
    res.json({
        mensaje: "Lista de todos los usuarios ✅",
        usuarios: [] // aquí podrías devolver usuarios reales desde la BD
    });
};

exports.getUser = (req, res) => {
    console.log("Accediendo a usuario CON ID:", req.params.id);
    res.json({
        mensaje: "Usuario encontrado",
        id: req.params.id
    });
};

exports.createUser = (req, res) => {
    const { nombre, apellido, email, telefono } = req.body;
    console.log(nombre, apellido, email, telefono);
    res.status(201).json({
        mensaje: "Usuario creado correctamente ✅",
        data: { nombre, apellido, email, telefono }
    });
};

exports.updateUser = (req, res) => {
    const { nombre, apellido, email, telefono } = req.body;
    console.log("ID:", req.params.id);
    console.log(nombre, apellido, email, telefono);
    res.json({
        mensaje: "Usuario modificado correctamente ✏️",
        id: req.params.id,
        nuevosDatos: { nombre, apellido, email, telefono }
    });
};

exports.deleteUser = (req, res) => {
    console.log("Eliminando usuario con ID:", req.params.id);
    res.json({
        mensaje: "Usuario eliminado ❌",
        id: req.params.id
    });
};
