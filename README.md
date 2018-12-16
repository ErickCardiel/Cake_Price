# Cotizar Pasteles

## Diagrama de casos de uso

  

![](https://lh4.googleusercontent.com/csh7BUWYSpiwP0SasMCbArR-0PcXGKysyjlevhlcMwbUvwyXMfsFalLMWlG7ndxVHs7km7Y23QkrPtUbUUWjJJ7w_ka4FracpBMB3GXlQQHDFMIdknZipfwGuexxqkFic2wCzhXP)

  
  
  
  
  

## Historias de usuario

[H.U.1.] - Servidor
Como: Administrador.  
Quiero: Tener montado un servidor.  
Para: Subir el sitio web y que los clientes accedan a él por internet.

  

[H.U.2.] - Base de Datos
Como: Administrador.  
Quiero: Tener una base de datos.  
Para: Administrar la información de los productos y características disponibles para los pasteles.

  

[H.U.3.]- Cotización de un pastel
Como: Cliente.  
Quiero: Conocer el precio de un pastel con ciertas características.  
Para: Consultar el precio y decidir si realizar el pedido.

  

[H.U.4.] - Editar productos y características.
Como: Administrador.  
Quiero: Editar los productos y características disponibles para un pastel.  
Para: Tener actualizada la disponibilidad y precios, obteniendo el costo correcto de un pastel que es posible realizar.  
  

[H.U.5.]- Enviar mensajes.
Como: Cliente.  
Quiero: Poder contactar al administrador desde el sitio web.  
Para: Iniciar un pedido o resolver alguna duda.  
  

[H.U.6.] - Galería.
Como: Cliente.  
Quiero: Consultar una galería de los trabajos realizados por la pastelería.  
Para: Decidir si su trabajo es de mi agrado para realizar un pedido.  
  

[H.U.7.] - Preguntas frecuentes
Como: Administrador.
Quiero: Que el sitio web contenga una sección con respuestas a las preguntas más comunes realizadas por los clientes.  
Para: Evitar recibir y contestar mensajes con las mismas preguntas muchas veces.

  
  
  
  

# Reporte Técnico
## Presentación de equipo y cliente
## Descripción del giro de la empresa/cliente

Somos un pequeño negocio de pasteles que busca facilitar la vida de nuestros clientes mediante la preparación de cualquier pastel que desee a un precio económico, eso sin descuidar el gran sabor y la calidad de nuestros pasteles. Para nosotros lo más importante es garantizar la higiene en nuestro trabajo, el sabor, la apariencia, la calidad en nuestros ingredientes, así como la confianza,honestidad y responsabilidad hacia nuestros clientes.

## Necesidades del cliente

-   Tener una página de su negocio donde se pueda consultar el costo de un pastel con determinadas especificaciones de manera rapida y facil.
    
-   Que se pueda acceder a la pagina por internet.
    
-   Que la página tenga una sección para consultar las preguntas más frecuentemente realizadas por sus clientes.
    
-   Que la página tenga una sección para que los clientes puedan comunicarse con él e iniciar una compra o despejar una duda sobre algún pastel.
    

## Propuesta de solución

Desarrollar una página de la pastelería donde exista una sección con todas las especificaciones de un pastel y que dependiendo lo que seleccione el cliente calcule el costo de dicho pastel. La página permite al cliente acceder a una galería de los pasteles ya realizados por la pastelería. También permite que el cliente envíe un mensaje al correo de la pastelería para iniciar una conversación e iniciar una compra o despejar alguna duda.

  
  

## Especificaciones técnicas

### Organización del equipo (metodología adoptada)

Fue utilizada la metodología de Scrum, realizando un calendario de todo el proyecto, para realizarlo fue necesario crear las historias de usuario, asignar pesos a cada una de ellas, fijar los criterios de aceptación, la duración de cada sprint etc.
![](https://lh6.googleusercontent.com/s-PmOIYzEcmVnhOFyG6OwRVztyn_wiq5C7qBr-B1OYmy-seyRCVz_bKr_SLT-EupXgeEsnSVNCX84jeFBUt4N3wRcdypG0IkhD0lF3rvHvd3rbjmJ-PYms7I2QJRlx_7XEVCGflZp2E)

![](https://lh5.googleusercontent.com/kSp8iTpUM51mp1dvMzamlKxP65RdO82xpVMUrcvCWjbrRnEJOp0VS7Q97hqjhPJHyidak26yY-TFAySsFsdICpLO3ejIUfZP9w7LtMo_UxO2zsp-KwkYk11NQzFpypfwgTmH5MT36SM)**
![](https://lh3.googleusercontent.com/kf9iobsfUL5ep7zT1cio_KRyAwzkKSGB4Souof_FNC-RCZlM47ll6yg6Qm-DqpCRvC7Y_EWxQ7AniJxpYB8a86qReK2df_PPTWORiCQ70Lit4oUMTq0w5Vjg4AvfzPAHo3rWn89reDQ)**

### Tecnologías utilizadas

  

-   Python v3.5.4
    
-   Django v1.11.5
    
-   HTML5
    
-   CSS3
    
-   JavaScript
    
-   Jquery
    
-   Pycharm
    
-   Sublime Text
    
-   Git
    
-   Github
    
-   Trello
    
-   Google Drive
    
-   Photoshop
    

### Diagrama de clases

#### Arquitectura de aplicación

  

![](https://lh6.googleusercontent.com/WO_Dhz2Lakw_vqvt7NdVwrshq4E5RNIjoD1cHZ5w-nyyruExZo1sQqh64czH2bFWJhcMvmRTbkqUXkoQvKL6qO818hQhS4R1SVWL8yRdCKkZWSSR9rx7W_0M7iQvdoAxZkL5YS5G)

Arquitectura Cliente-Servidor con Django

  

#### ![](https://lh4.googleusercontent.com/g8WAmLfaZUgdZcnKPzVpDJmYqDW7642nf9yFaLc1ExNdr6MTyCHY-Sp0qL9FmibrNyhqyBBjzPlk3viqIK1bBu4kWXdsnKDEsXamfZaBqXOb-tHSMFqpZ5u_j-vPnn2fxsgrfdhZ)

#### Arquitectura de Desarrollo del Software

  
  
  
  
  
  
  
  

#### Patrones de diseño empleados

  

Modelo-Vista-Controlador

  

El MVC asigna los objetos a uno de los tres roles definidos. El MVC no sólo define los roles de los objetos, sino que también define la manera en que se comunican. El patrón es popular para la creación de aplicaciones móviles debido a que separa la aplicación en módulos. El MVC soporta el uso de diferentes vistas por lo que puede ser especialmente útil en la presentación de páginas que sean abiertas desde diferentes dispositivos.

  
  

Fábrica

  

El patrón de fábrica define una interfaz para crear objetos. El patrón de fábrica crea objetos sin exponer la lógica de instanciación al cliente y se refiere al objeto mediante una interfaz común. El patrón de fábrica fue utilizado para la colocación de cada ingrediente del pastel en la vista del usuario, estos tienen un orden específico de selección y todos tienen la misma interfaz draggable con la cual interactúa el usuario para modificar los atributos del pastel.

  
  

Decorador

  

El patrón decorador responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera. En el sistema realizado, cada vez que el usuario agrega un elemento al pastel este cambiara su precio y las propiedades que este tiene serán asociadas con las anteriores. Lo mismo con la matriz de selección de Toppings.

  
  
  

## Flujos significativos de la aplicación

1.  El usuario ingresa a la página.
    

![](https://lh5.googleusercontent.com/r8tQYGizaNVqRjjcFyrDmh3uwkCdDMKfvIQ9cd4rWm0GrzvEPXPXZjO4bu9oiw-7DXIxvG5_FCubldPLGS-tfdnIlVsnUhInJTF_CHcCP6nfJDitmDxNkV3LvUuY4o3muAq9ooQ6)

2. El usuario ingresa a la sección de cotización.

![](https://lh5.googleusercontent.com/tFIJEGnvhNCOWW2D_rhsqooIoAXtaidPNSUiqWBQVbBCLyDoHd6YQDLO3jJohNqKMr4Nd6ayuIWq-W1-dDY_MivB3beYaUXeoCrB9XOjPBjFaselsCG-VTyxK2S56i79FknS-eS8)

3. El usuario selecciona los ingredientes que desea que lleve su pastel, manteniendo presionado el botón izquierdo del ratón para arrastrar los ingredientes a la caja que representa un contenedor de los ingredientes.

![](https://lh3.googleusercontent.com/c0DfCjKETMgxcyDrLHy5-2MD7hrnDAjzKPTcWW6DQs_z6eA1iEcPzLkrmw2Vp8TJxbSVIZ1TLz3MH99MdKdY_1yaS_VWAkEvMKo7mOWjWCC8htWWG26qirSn_RJA9vkPPGk6dMAU)

4. El usuario accede a la página de contactactanos para contactarse con el dueño o la dueña de la pastelería.

## Conclusiones

La aplicación facilita al dueño y a los cliente el cálculo del costo de un pastel con ciertas características.

  

Mejora el servicio hacia los clientes haciendo más práctico y rápido el pedido entre ambas partes y ahorra tiempo al dueño evitando que le pregunten directamente por una cotización.

  

La aplicación brinda de esta forma la posibilidad de que el negocio prospere gracias a esta misma.
