use floresteria_encanto;
create table usuarios(
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,-- ID de la categoría (clave primaria)
  nombre_usuario VARCHAR(255) NOT NULL,
  apellido_usuario VARCHAR(50),
  correo VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL, -- aquí va el hash de la contraseña
  tipo_usuario VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,-- Fecha de creación
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Fecha de actualización,
);

create table categoria_articulos(
  id_categoria_producto int primary key,
  nombre_categoria varchar(30)
);

create table productos(
  id_producto int auto_increment primary key,
  nombre_producto varchar(255) not null,
  descripcion text,
  precio decimal(10,2) not null,
  stock int not null,
  foreign key (categoria_producto) references categoria_articulos(id_categoria_producto)
);

create table imagenes(
  id_imagen int auto_increment primary key,
  url varchar(255),
  foreign key (id_producto) references productos(id_producto)
);

create table carrito(
  id_carrito int auto_increment primary key,
  cantidad int not null,
  subtotal decimal(10,2) not null,
  fecha_creacion timestamp default current_timestamp,
  foreign key (id_producto) references productos(id_producto)
);

create table detalle_carrito(
  id_detalle_carrito int auto_increment primary key,
  cantidad int,
  subtotal decimal(10,2),
  foreign key (id_carrito) references carrito(id_carrito),
  foreign key (id_producto) references productos(id_producto)
);

create table facturacion(
  numero_factura int auto_increment primary key,
  fecha_de_factura_hora timestamp default current_timestamp,
  subtotal decimal(10,2),
  iva decimal(10,2),
  total decimal(10,2),
  foreign key (fk_id_carrito) references carrito(id_carrito),
  foreign key (fk_id_usuario) references usuarios(id_usuario)
);
create table entrega_pedido(
  id_entrega int auto_increment primary key,
  fk_numero_factura int,
  direccion varchar(255),
  ciudad varchar(100),
  departamento varchar(100),
  foreign key (fk_numero_factura) references facturacion(numero_factura)
);
create table comentarios_articulo(
  id_comentario int auto_increment primary key,
  comentario text,
  fecha_comentario timestamp default current_timestamp,
  calificacion int, -- opcional
  fk_numero_factura int,
  fk_id_usuario int,
  foreign key (fk_numero_factura) references facturacion(numero_factura),
  foreign key (fk_id_usuario) references usuarios(id_usuario)
);






























-- ------------------------------------------------------------------------------------------ Crear la tabla 'categorias'
CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY, -- ID de la categoría (clave primaria)
  nombre VARCHAR(255) NOT NULL, -- Nombre de la categoría
  descripcion TEXT, -- Descripción opcional de la categoría
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de creación
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Fecha de actualización
);

-- Crear la tabla 'productos'
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY, -- ID del producto (clave primaria)
  nombre VARCHAR(255) NOT NULL, -- Nombre del producto
  descripcion TEXT, -- Descripción opcional del producto
  precio DECIMAL(10, 2), -- Precio del producto
  categoria_id INT, -- Clave foránea que referencia a la tabla 'categorias'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de creación
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Fecha de actualización
  FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL -- Establece la relación y comportamiento al eliminar una categoría
);


INSERT INTO categorias (nombre, descripcion) VALUES
('Electrónica', 'Categoría para productos electrónicos'),
('Ropa', 'Categoría para prendas de vestir'),
('Alimentos', 'Categoría para productos alimenticios');


INSERT INTO productos (nombre, descripcion, precio, categoria_id) VALUES
('Smartphone', 'Teléfono inteligente con 64GB de almacenamiento', 499.99, 1),
('Laptop', 'Portátil con pantalla de 15 pulgadas', 799.99, 1),
('Camiseta', 'Camiseta de algodón para hombre', 19.99, 2),
('Manzanas', 'Manzanas frescas de calidad', 5.99, 3);

select * from categorias;
select * from productos;

SELECT p.id, p.nombre AS producto, p.descripcion, p.precio, c.nombre AS categoria
FROM productos p
JOIN categorias c ON p.categoria_id = c.id;

SELECT c.id, c.nombre AS categoria, p.nombre AS producto
FROM categorias c
LEFT JOIN productos p ON c.id = p.categoria_id;
-- solo ejemplo  para desarrolar  con iner join 
-- ----------------------------------------------------------------------------------------------------




