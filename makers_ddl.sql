-- tablas padre
-- tablas tipo...
CREATE TABLE tipos_servicios(
	id_tipo_servicio serial PRIMARY KEY,
	tipo_servicio character varying(30)
);
-- tablas estado
CREATE TABLE estados_servicios(
	id_estado_servicio serial PRIMARY KEY,
	estado character varying(25) NOT NULL
);
CREATE TABLE estados_facturas(
	id_estado_factura serial PRIMARY KEY,
	estado character varying(25) NOT NULL
);
CREATE TABLE estados_reservaciones(
	id_estado_reservacion serial PRIMARY KEY,
	estado character varying(25) NOT NULL
);
CREATE TABLE estados_usuarios(
	id_estado_usuario serial PRIMARY KEY,
	estado character varying(25) NOT NULL
);
-- TABLAS INDEPENDIENTES
CREATE TABLE sucursales(
	id_sucursal serial PRIMARY KEY,
	direccion character varying(500) NOT NULL,
	telefono character varying(9) NOT NULL,
	horario character varying(25) NOT NULL,
	nrc character varying(8) NOT NULL,
	nit character varying(17) NOT NULL
);

s
CREATE TABLE horarios(
	id_horario serial PRIMARY KEY,
	hora_apertura time NOT NULL,
	hora_cierre time NOT NULL
);

CREATE TABLE cargos(
	id_cargo serial PRIMARY KEY,
	cargo character varying(30) NOT NULL
);

-- TABLAS DEPENDIENTES DE + DEP A - DEP
-- + llave foraneas
CREATE TABLE clientes(
	id_cliente serial PRIMARY KEY,
	nombres character varying(35) NOT NULL,
	apellidos character varying(35) NOT NULL,
	dui character varying(10) NOT NULL,
	telefono character varying(20) NOT NULL,
	correo character varying(50) NOT NULL,
	clave character varying(15) NOT NULL,
	id_estado_usuario_cliente integer NOT NULL, --FOREIGN KEY
	CONSTRAINT fk_estado_cliente FOREIGN KEY (id_estado_usuario_cliente) REFERENCES estados_usuarios(id_estado_usuario),
	CONSTRAINT chk_correo_cliente CHECK (correo like '%@%' AND correo like '%.com')--validacion
);

CREATE TABLE servicios(
	id_servicio serial PRIMARY KEY NOT NULL,
	id_tipo_servicio integer NOT NULL, --FOREIGN KEY
	nombre_servicio character varying(25) NOT NULL,
	descripcion character varying(75) NULL,
	precio numeric(4,2) NULL,
	existencias integer NULL,
	id_estado_servicio integer NOT NULL ,--FOREIGN KEY
	CONSTRAINT fk_tipo_servicio FOREIGN KEY (id_tipo_servicio) REFERENCES tipos_servicios(id_tipo_servicio),
	CONSTRAINT fk_estado_servicio FOREIGN KEY (id_estado_servicio) REFERENCES estados_servicios(id_estado_servicio)
);
CREATE TABLE facturas(
	id_factura serial PRIMARY KEY,
	id_cliente integer NOT NULL, --FOREIGN KEY
	fecha date NOT NULL,
	hora time NOT NULL,
	id_estado_factura integer NOT NULL,--FOREIGN KEY
	CONSTRAINT fk_cliente_factura FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente),
	CONSTRAINT fk_estado_factura FOREIGN KEY (id_estado_factura) REFERENCES estados_facturas(id_estado_factura)
);

CREATE TABLE empleados(
	id_empleado serial PRIMARY KEY,
	nombres character varying(35) NOT NULL,
	apellidos character varying(35) NOT NULL,
	dui character varying(10) NOT NULL,
	telefono character varying(20) NOT NULL,
	correo character varying(50) NOT NULL,
	clave character varying(15) NOT NULL,
	planilla numeric (5,2) NOT NULL,
	--FOREIGNS KEY
	id_sucursal integer NOT NULL,
	id_horario integer NOT NULL,
	id_cargo integer NOT NULL,
	id_estado_empleado integer NOT NULL,
	CONSTRAINT fk_sucursal_empleado FOREIGN KEY (id_sucursal) REFERENCES sucursales(id_sucursal),
	CONSTRAINT fk_horario_empleado FOREIGN KEY (id_horario) REFERENCES horarios(id_horario),
	CONSTRAINT fk_cargo_empleado FOREIGN KEY (id_cargo) REFERENCES cargos(id_cargo),
	CONSTRAINT fk_estado_empleado FOREIGN KEY (id_estado_empleado) REFERENCES estados_usuarios(id_estado_usuario)
);	

CREATE TABLE reservaciones(
	id_reservacion serial PRIMARY KEY,
	id_cliente integer NOT NULL,--FOREIGN KEY
	id_empleado integer NOT NULL,--FOREIGN KEY
	fecha date NOT NULL,
	hora time NOT NULL,
	id_estado integer NOT NULL,--FOREIGN KEY
	CONSTRAINT fk_reservacion_cliente FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente),
	CONSTRAINT fk_reservacion_empleado FOREIGN KEY(id_empleado) REFERENCES empleados(id_empleado),
	CONSTRAINT fk_reservacion_estado FOREIGN KEY (id_estado) REFERENCES estados_reservaciones(id_estado_reservacion)
);
--TABLA DETALLE
CREATE TABLE ordenes(
	id_orden serial PRIMARY KEY,
	id_servicio integer NOT NULL,
	descuento numeric(5,2) NOT NULL DEFAULT 0,
	cantidad integer NOT NULL,
	id_empleado integer NOT NULL,
	id_factura integer NOT NULL,
	CONSTRAINT fk_orden_servicio FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio),
	CONSTRAINT fk_orden_empleado FOREIGN KEY (id_empleado) REFERENCES empleados(id_empleado),
	CONSTRAINT fk_orden_factura FOREIGN KEY (id_factura) REFERENCES facturas(id_factura),
	CONSTRAINT chk_cantidad CHECK (cantidad >= 1)
);
CREATE TABLE detalles_servicios_sucursales(
	id_detalle serial PRIMARY KEY,
	id_sucursal integer NOT NULL,
	id_servicio integer NOT NULL,
	CONSTRAINT fk_detalle_servicio_sucursal FOREIGN KEY (id_sucursal) REFERENCES sucursales(id_sucursal),
	CONSTRAINT fk_detalle_servicio_servicio FOREIGN KEY (id_servicio) REFERENCES servicios(id_servicio)
);
