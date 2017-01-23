/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 6367 Año de creación de pregunta: 2003
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[0]= new Array();
 choices[0][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[0][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[0][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[0][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[0] = 1;
 units[0] = ['100'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 6367. Examen 2006 JCYL";
 preguntaids[0] = 6367


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[1]= "2)  El programa IDABC:";
 choices[1]= new Array();
 choices[1][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[1][1] = "Contiene tres directivas";
 choices[1][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[1][3] = "Fue creado antes que el ENS";
 answers[1] = 0;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 4021. ";
 preguntaids[1] = 4021


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[2]= "3)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[2]= new Array();
 choices[2][0] = "Ley org&aacute;nica.";
 choices[2][1] = "Ley ordinaria.";
 choices[2][2] = "Ley de bases.";
 choices[2][3] = "Ley marco.";
 answers[2] = 2;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 98. Constituci&oacute;n de 1978";
 preguntaids[2] = 98


//  Id pregunta: 5298 Año de creación de pregunta: 2006
 questions[3]= "4)  La burbuja de las puntocom explot&oacute;:";
 choices[3]= new Array();
 choices[3][0] = "En el a&ntilde;o 1999";
 choices[3][1] = "A finales del 1999 y durante el 2000";
 choices[3][2] = "A finales del 2000 y durante el 2001";
 choices[3][3] = "A finales del 2001 y durante el 2002";
 answers[3] = 2;
 units[3] = ['103'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5298. ";
 preguntaids[3] = 5298


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[4]= "5)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[4]= new Array();
 choices[4][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[4][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[4][2] = "Quejas y reclamaciones.";
 choices[4][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[4] = 1;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[4] = 6829


//  Id pregunta: 1303 Año de creación de pregunta: 2016
 questions[5]= "6)  En UNIX, el atributo &quot;uid&quot; de un proceso:";
 choices[5]= new Array();
 choices[5][0] = "Indica el identificador del usuario que ha lanzado el proceso.";
 choices[5][1] = "Indica el grupo del usuario que ha lanzado el proceso.";
 choices[5][2] = "Indica el identificador del proceso.";
 choices[5][3] = "Indica la prioridad del proceso.";
 answers[5] = 0;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 1303. ";
 preguntaids[5] = 1303


//  Id pregunta: 9798 Año de creación de pregunta: 2015
 questions[6]= "7)  Son principios del programa europeo ISA:";
 choices[6]= new Array();
 choices[6][0] = "La privacidad, la apertura y la seguridad.";
 choices[6][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[6][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[6][3] = "Todas las anteriores.";
 answers[6] = 3;
 units[6] = ['43', '19'];
 blocks[6] = ['B1', 'A4'];
 comments[6] = "Id Pregunta: 9798. ";
 preguntaids[6] = 9798


//  Id pregunta: 1256 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[7]= new Array();
 choices[7][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[7][1] = "Publicidad de las normas.";
 choices[7][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[7][3] = "Coordinaci&oacute;n normativa.";
 answers[7] = 1;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 1256. ";
 preguntaids[7] = 1256


//  Id pregunta: 2900 Año de creación de pregunta: 2002
 questions[8]= "9)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[8]= new Array();
 choices[8][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[8][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[8][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[8][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[8] = 2;
 units[8] = ['68'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2900. ";
 preguntaids[8] = 2900


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[9]= new Array();
 choices[9][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[9][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[9][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[9][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[9] = 2;
 units[9] = ['22'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[9] = 502


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[10]= new Array();
 choices[10][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado";
 choices[10][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[10][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[10][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[10] = 2;
 units[10] = ['7'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 244. Ley 39/2015";
 preguntaids[10] = 244


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[11]= "12)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[11]= new Array();
 choices[11][0] = "Un informe de g&eacute;nero.";
 choices[11][1] = "La variable de sexo.";
 choices[11][2] = "La variable de edad.";
 choices[11][3] = "La variable de comportamiento.";
 answers[11] = 1;
 units[11] = ['14'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 395. Pol&iacute;ticas de igualdad";
 preguntaids[11] = 395


//  Id pregunta: 3424 Año de creación de pregunta: 2006
 questions[12]= "13)  En un GIS, el modelo vectorial";
 choices[12]= new Array();
 choices[12][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[12][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[12][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[12][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[12] = 0;
 units[12] = ['71'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3424. ";
 preguntaids[12] = 3424


//  Id pregunta: 1657 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[13][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[13][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[13][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[13] = 0;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 1657. ";
 preguntaids[13] = 1657


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[14]= "15)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[14]= new Array();
 choices[14][0] = "El Tratado de Roma, 1957.";
 choices[14][1] = "El Acta &Uacute;nica Europea.";
 choices[14][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[14][3] = "Ninguna es correcta.";
 answers[14] = 2;
 units[14] = ['14'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 384. Pol&iacute;ticas de igualdad";
 preguntaids[14] = 384


//  Id pregunta: 2475 Año de creación de pregunta: 2009
 questions[15]= "16)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de:";
 choices[15]= new Array();
 choices[15][0] = "3 meses";
 choices[15][1] = "6 meses";
 choices[15][2] = "12 meses";
 choices[15][3] = "2 a&ntilde;os";
 answers[15] = 3;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 2475. ";
 preguntaids[15] = 2475


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[16]= "17)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[16]= new Array();
 choices[16][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[16][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[16][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[16][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[16] = 0;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 14. Constituci&oacute;n de 1978";
 preguntaids[16] = 14


//  Id pregunta: 4798 Año de creación de pregunta: 2002
 questions[17]= "18)  En el protocolo HTTP, el m&eacute;todo HEAD:";
 choices[17]= new Array();
 choices[17][0] = "Es lo mismo que GET";
 choices[17][1] = "Recupera el cuerpo o Body del mensaje";
 choices[17][2] = "Las cabeceras no aparecen en GET pero s&iacute; en HEAD";
 choices[17][3] = "Se utiliza normalmente para ver la existencia del documento o su longitud";
 answers[17] = 3;
 units[17] = ['103'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4798. ";
 preguntaids[17] = 4798


//  Id pregunta: 9477 Año de creación de pregunta: 2014
 questions[18]= "19)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[18]= new Array();
 choices[18][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[18][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[18][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[18][3] = "Todas las anteriores";
 answers[18] = 3;
 units[18] = ['85'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 9477. ";
 preguntaids[18] = 9477


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[19]= "20)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[19]= new Array();
 choices[19][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[19][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[19][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[19][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[19] = 2;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[19] = 611


//  Id pregunta: 5488 Año de creación de pregunta: 2007
 questions[20]= "21)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[20]= new Array();
 choices[20][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[20][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[20][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[20][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[20] = 0;
 units[20] = ['30'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 5488. ";
 preguntaids[20] = 5488


//  Id pregunta: 7353 Año de creación de pregunta: 2010
 questions[21]= "22)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[21]= new Array();
 choices[21][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[21][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[21][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[21][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[21] = 2;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7353. Examen TIC B 2009";
 preguntaids[21] = 7353


//  Id pregunta: 10140 Año de creación de pregunta: 2015
 questions[22]= "23)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[22][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[22][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[22][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[22] = 2;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10140. Examen TIC A1 2014";
 preguntaids[22] = 10140


//  Id pregunta: 2775 Año de creación de pregunta: 2002
 questions[23]= "24)  El nombre del lenguaje Ada se debe a:";
 choices[23]= new Array();
 choices[23][0] = "Advanced Development of Algorithms";
 choices[23][1] = "Automatic Development and Adaptation of software";
 choices[23][2] = "Adaptative Digital Algorithms";
 choices[23][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[23] = 3;
 units[23] = ['56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2775. ";
 preguntaids[23] = 2775


//  Id pregunta: 10046 Año de creación de pregunta: 2015
 questions[24]= "25)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "Abstracci&oacute;n.";
 choices[24][1] = "Polimorfismo.";
 choices[24][2] = "Herencia.";
 choices[24][3] = "Encapsulamiento.";
 answers[24] = 3;
 units[24] = ['89'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 10046. Examen TIC A2 2014";
 preguntaids[24] = 10046


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[25]= "26)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[25]= new Array();
 choices[25][0] = "Polimorfismo.";
 choices[25][1] = "Herencia.";
 choices[25][2] = "Reusabilidad.";
 choices[25][3] = "Encapsulaci&oacute;n.";
 answers[25] = 3;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7669. Map 2007";
 preguntaids[25] = 7669


//  Id pregunta: 4686 Año de creación de pregunta: 2002
 questions[26]= "27)  El MIB est&aacute;ndar o MIB-I se complet&oacute; con:";
 choices[26]= new Array();
 choices[26][0] = "MIB-2";
 choices[26][1] = "MIB-II";
 choices[26][2] = "Con la RFC 1213";
 choices[26][3] = "La 'b' y la 'c' son correctas";
 answers[26] = 3;
 units[26] = ['114'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4686. ";
 preguntaids[26] = 4686


//  Id pregunta: 7457 Año de creación de pregunta: 2010
 questions[27]= "28)  La autenticaci&oacute;n consiste en:";
 choices[27]= new Array();
 choices[27][0] = "Comprobar los permisos del usuario";
 choices[27][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[27][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[27][3] = "Comprobar la identidad del usuario";
 answers[27] = 3;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7457. ";
 preguntaids[27] = 7457


//  Id pregunta: 3754 Año de creación de pregunta: 2002
 questions[28]= "29)  Del modelo de ciclo de vida en espiral se puede decir:";
 choices[28]= new Array();
 choices[28][0] = "Es un modelo orientado a la gesti&oacute;n de riesgos y permite el prototipado r&aacute;pido";
 choices[28][1] = "No es un modelo orientado a la gesti&oacute;n de riesgos, pero permite el prototipado r&aacute;pido";
 choices[28][2] = "Es un modelo orientado a la gesti&oacute;n de riesgos, pero no permite el prototipado";
 choices[28][3] = "No es un modelo orientado a la gesti&oacute;n de riesgos y no permite el prototipado r&aacute;pido";
 answers[28] = 0;
 units[28] = ['82'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3754. ";
 preguntaids[28] = 3754


//  Id pregunta: 2286 Año de creación de pregunta: 2002
 questions[29]= "30)  Se entiende por integridad de la informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Propiedad o caracter&iacute;stica consistente en que el activo no ha sido alterado  de manera no autorizada.";
 choices[29][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[29][2] = "Disposici&oacute;n de los servicios a ser usados cuando sea necesario";
 choices[29][3] = "Caracter&iacute;stica que previene contra la denegaci&oacute;n no autorizada de acceso  a activos del dominio.";
 answers[29] = 0;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2286. ";
 preguntaids[29] = 2286


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[30]= new Array();
 choices[30][0] = "Las sociedades mercantiles estatales.";
 choices[30][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[30][2] = "Las respuestas a) y b) son correctas.";
 choices[30][3] = "Las respuestas a) y b) no son correctas.";
 answers[30] = 2;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 319. Presupuestos generales";
 preguntaids[30] = 319


//  Id pregunta: 1339 Año de creación de pregunta: 2016
 questions[31]= "32)  En M&eacute;trica v3, &iquest;qui&eacute;n lIeva a cabo las pruebas en la tarea IAS 6.2 &quot;realizaci&oacute;n de las pruebas de aceptaci&oacute;n&quot;?";
 choices[31]= new Array();
 choices[31][0] = "Usuarios expertos.";
 choices[31][1] = "Directores de los usuarios.";
 choices[31][2] = "Equipo de calidad.";
 choices[31][3] = "Equipo de implantaci&oacute;n.";
 answers[31] = 0;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1339. ";
 preguntaids[31] = 1339


//  Id pregunta: 9179 Año de creación de pregunta: 2014
 questions[32]= "33)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[32]= new Array();
 choices[32][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[32][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[32][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica.";
 choices[32][3] = "Carta de servicios electr&oacute;nicos.";
 answers[32] = 1;
 units[32] = ['7'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 9179. Examen TIC A2 2013";
 preguntaids[32] = 9179


//  Id pregunta: 1796 Año de creación de pregunta: 2016
 questions[33]= "34)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:";
 choices[33]= new Array();
 choices[33][0] = "Sede Electr&oacute;nica";
 choices[33][1] = "Empleado P&uacute;blico";
 choices[33][2] = "De Componente";
 choices[33][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[33] = 3;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 1796. ";
 preguntaids[33] = 1796


//  Id pregunta: 8484 Año de creación de pregunta: 2011
 questions[34]= "35)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[34]= new Array();
 choices[34][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[34][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[34][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[34][3] = "Todos los anteriores";
 answers[34] = 3;
 units[34] = ['35'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 8484. ";
 preguntaids[34] = 8484


//  Id pregunta: 10704 Año de creación de pregunta: 2015
 questions[35]= "36)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[35]= new Array();
 choices[35][0] = "MD5";
 choices[35][1] = "TDEA";
 choices[35][2] = "AES";
 choices[35][3] = "RSA";
 answers[35] = 0;
 units[35] = ['76'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10704. ";
 preguntaids[35] = 10704


//  Id pregunta: 3088 Año de creación de pregunta: 2002
 questions[36]= "37)  Un sistema operativo debe evolucionar f&aacute;cilmente porque:";
 choices[36]= new Array();
 choices[36][0] = "Hay frecuentes actualizaciones de hardware, y nuevos tipos del mismo; hay nuevos servicios que implican nuevos mecanismos de control; y se presentan siempre fallos no previstos que es necesario corregir";
 choices[36][1] = "No debe evolucionar f&aacute;cilmente, pues debe estar prevista desde su generaci&oacute;n la incorporaci&oacute;n de nuevos elementos de hardware";
 choices[36][2] = "No debe evolucionar f&aacute;cilmente, para evitar la f&aacute;cil generaci&oacute;n de versiones no autorizadas por el propietario";
 choices[36][3] = "Hay frecuentes desapariciones y apariciones de empresas de software, que podr&iacute;an dar lugar a una descontinuidad de versiones";
 answers[36] = 0;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3088. ";
 preguntaids[36] = 3088


//  Id pregunta: 10521 Año de creación de pregunta: 2015
 questions[37]= "38)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[37]= new Array();
 choices[37][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[37][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[37][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[37][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[37] = 3;
 units[37] = ['44'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 10521. ";
 preguntaids[37] = 10521


//  Id pregunta: 5011 Año de creación de pregunta: 2002
 questions[38]= "39)  OSA Parlay es:";
 choices[38]= new Array();
 choices[38][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[38][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[38][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[38][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[38] = 0;
 units[38] = ['117'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5011. ";
 preguntaids[38] = 5011


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[39]= new Array();
 choices[39][0] = "Transferencias de cr&eacute;dito.";
 choices[39][1] = "Incorporaciones de cr&eacute;dito.";
 choices[39][2] = "Imputaciones de cr&eacute;dito.";
 choices[39][3] = "Ampliaciones de cr&eacute;dito.";
 answers[39] = 2;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 280. Presupuestos generales";
 preguntaids[39] = 280


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[40]= "41)  Dentro de los Sistemas Operativos M&oacute;viles NO se encuentra:";
 choices[40]= new Array();
 choices[40][0] = "Ubuntu Touch";
 choices[40][1] = "iOS";
 choices[40][2] = "MVP";
 choices[40][3] = "Tizen";
 answers[40] = 2;
 units[40] = ['59'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 679. AGE A2 2015";
 preguntaids[40] = 679


//  Id pregunta: 8920 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[41]= new Array();
 choices[41][0] = "Autoridad limitada para la toma de decisiones";
 choices[41][1] = "Presupuestos plurianuales en todos los casos";
 choices[41][2] = "M&uacute;ltiples actores involucrados";
 choices[41][3] = "Coordinaci&oacute;n entre organismos";
 answers[41] = 1;
 units[41] = ['40'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 8920. ";
 preguntaids[41] = 8920


//  Id pregunta: 8773 Año de creación de pregunta: 2013
 questions[42]= "43)  &iquest;Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[42]= new Array();
 choices[42][0] = "Clase D";
 choices[42][1] = "Clase F";
 choices[42][2] = "Clase E";
 choices[42][3] = "b) y c) son correctas.";
 answers[42] = 3;
 units[42] = ['104'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8773. ";
 preguntaids[42] = 8773


//  Id pregunta: 5366 Año de creación de pregunta: 2006
 questions[43]= "44)  Con el termino &quot;ventana de backup&quot; se define";
 choices[43]= new Array();
 choices[43][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[43][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[43][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[43][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[43] = 3;
 units[43] = ['45'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 5366. ";
 preguntaids[43] = 5366


//  Id pregunta: 10774 Año de creación de pregunta: 2015
 questions[44]= "45)  Frente a la recepci&oacute;n de una solicitud de revocaci&oacute;n de consentimiento del tratamiento de datos de car&aacute;cter personal, el responsable cesar&aacute; el tratamiento de los datos en un plazo m&aacute;ximo de:";
 choices[44]= new Array();
 choices[44][0] = "30 d&iacute;as h&aacute;biles";
 choices[44][1] = "30 d&iacute;as naturales";
 choices[44][2] = "10 d&iacute;as h&aacute;biles";
 choices[44][3] = "10 d&iacute;as naturales";
 answers[44] = 2;
 units[44] = ['35'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 10774. ";
 preguntaids[44] = 10774


//  Id pregunta: 5786 Año de creación de pregunta: 2007
 questions[45]= "46)  En UML la forma especial de asociaci&oacute;n que especifica una relaci&oacute;n todo-parte entre el agregado y un componente se denomina";
 choices[45]= new Array();
 choices[45][0] = "agregaci&oacute;n";
 choices[45][1] = "generalizaci&oacute;n";
 choices[45][2] = "dependencia";
 choices[45][3] = "asociaci&oacute;n fuerte";
 answers[45] = 0;
 units[45] = ['85'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 5786. ";
 preguntaids[45] = 5786


//  Id pregunta: 3882 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Qu&eacute; sistema de parametrizaci&oacute;n utilizado para la s&iacute;ntesis de voz se conoce tambi&eacute;n como s&iacute;ntesis por reglas?:";
 choices[46]= new Array();
 choices[46][0] = "S&iacute;ntesis a partir de fonemas";
 choices[46][1] = "S&iacute;ntesis a partir de difonemas";
 choices[46][2] = "S&iacute;ntesis a partir de semis&iacute;labas";
 choices[46][3] = "S&iacute;ntesis texto-voz";
 answers[46] = 0;
 units[46] = ['81'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3882. ";
 preguntaids[46] = 3882


//  Id pregunta: 9801 Año de creación de pregunta: 2015
 questions[47]= "48)  La LOPD:";
 choices[47]= new Array();
 choices[47][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[47][1] = "A y C son correctas";
 choices[47][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[47][3] = "A y C son incorrectas.";
 answers[47] = 2;
 units[47] = ['35'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 9801. ";
 preguntaids[47] = 9801


//  Id pregunta: 1686 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; nombre recibe, de acuerdo con la metodolog&iacute;a METRICA, cualquier proceso que actualiza datos del sistema?";
 choices[48]= new Array();
 choices[48][0] = "Evento.";
 choices[48][1] = "Efecto.";
 choices[48][2] = "Entidad.";
 choices[48][3] = "Nodo.";
 answers[48] = 0;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1686. ";
 preguntaids[48] = 1686


//  Id pregunta: 3468 Año de creación de pregunta: 2006
 questions[49]= "50)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[49]= new Array();
 choices[49][0] = "Aplicaci&oacute;n";
 choices[49][1] = "Transporte";
 choices[49][2] = "Red";
 choices[49][3] = "Sesi&oacute;n";
 answers[49] = 0;
 units[49] = ['77'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3468. ";
 preguntaids[49] = 3468


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[50]= new Array();
 choices[50][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[50][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[50][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[50][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[50] = 3;
 units[50] = ['11'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 326. Presupuestos generales";
 preguntaids[50] = 326


//  Id pregunta: 7186 Año de creación de pregunta: 2010
 questions[51]= "52)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[51]= new Array();
 choices[51][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[51][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[51][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[51][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[51] = 1;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 7186. Castilla La Mancha 2009";
 preguntaids[51] = 7186


//  Id pregunta: 5166 Año de creación de pregunta: 2003
 questions[52]= "53)  Dentro de las Tecnolog&iacute;as de nivel acceso usadas en ATM se&ntilde;alar  la Falsa";
 choices[52]= new Array();
 choices[52][0] = "PSH";
 choices[52][1] = "SDH";
 choices[52][2] = "ATM";
 choices[52][3] = "SAR";
 answers[52] = 3;
 units[52] = ['107'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5166. ";
 preguntaids[52] = 5166


//  Id pregunta: 5349 Año de creación de pregunta: 2006
 questions[53]= "54)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[53]= new Array();
 choices[53][0] = "Un ticket de autenticaci&oacute;n";
 choices[53][1] = "Un ticket de autorizaci&oacute;n";
 choices[53][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[53][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[53] = 1;
 units[53] = ['120'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5349. ";
 preguntaids[53] = 5349


//  Id pregunta: 8460 Año de creación de pregunta: 2011
 questions[54]= "55)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[54]= new Array();
 choices[54][0] = "Encargado del tratamiento";
 choices[54][1] = "Destinatario o cesionario";
 choices[54][2] = "Afectado o interesado";
 choices[54][3] = "Tercero";
 answers[54] = 1;
 units[54] = ['35'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 8460. ";
 preguntaids[54] = 8460


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[55]= "56)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Anualmente.";
 choices[55][1] = "Ninguna de las respuestas es correcta.";
 choices[55][2] = "Trimestralmente.";
 choices[55][3] = "Semestralmente.";
 answers[55] = 0;
 units[55] = ['11'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 293. Presupuestos generales";
 preguntaids[55] = 293


//  Id pregunta: 7410 Año de creación de pregunta: 2010
 questions[56]= "57)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[56]= new Array();
 choices[56][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[56][1] = "Paravirtualizaci&oacute;n";
 choices[56][2] = "Virtualizaci&oacute;n de datos";
 choices[56][3] = "Virtualizaci&oacute;n de red";
 answers[56] = 2;
 units[56] = ['124'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 7410. ";
 preguntaids[56] = 7410


//  Id pregunta: 1971 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un requisito, que debe figurar en la solicitud de iniciaci&oacute;n de un procedimiento administrativo?";
 choices[57]= new Array();
 choices[57][0] = "Hechos, razones y petici&oacute;n en que se concrete con toda claridad la solicitud.";
 choices[57][1] = "&Oacute;rgano, centro o unidad administrativa a la que se dirige.";
 choices[57][2] = "Domicilio profesional a efectos de notificaciones.";
 choices[57][3] = "Firma del solicitante o acreditaci&oacute;n de la autenticidad de su voluntad expresada por cualquier medio.";
 answers[57] = 2;
 units[57] = ['7'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 1971. ";
 preguntaids[57] = 1971


//  Id pregunta: 10452 Año de creación de pregunta: 2015
 questions[58]= "59)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[58][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[58][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[58][3] = "Todas son verdaderas.";
 answers[58] = 3;
 units[58] = ['77'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 10452. ";
 preguntaids[58] = 10452


//  Id pregunta: 4481 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto de la fibra &oacute;ptica?:";
 choices[59]= new Array();
 choices[59][0] = "La fibra &oacute;ptica monomodo permite mayor ancho de banda que la multimodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[59][1] = "La fibra &oacute;ptica multimodo permite mayor ancho de banda que la monomodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[59][2] = "La fibra &oacute;ptica monomodo permite menor ancho de banda que la multimodo";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = 0;
 units[59] = ['106'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4481. ";
 preguntaids[59] = 4481


//  Id pregunta: 9527 Año de creación de pregunta: 2014
 questions[60]= "61)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[60]= new Array();
 choices[60][0] = "EJB home interface";
 choices[60][1] = "Un componente EJB";
 choices[60][2] = "La API EJB";
 choices[60][3] = "Un objeto interface EJB";
 answers[60] = 0;
 units[60] = ['64'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9527. ";
 preguntaids[60] = 9527


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[61]= "62)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[61]= new Array();
 choices[61][0] = "3 a&ntilde;os.";
 choices[61][1] = "5 a&ntilde;os.";
 choices[61][2] = "4 a&ntilde;os.";
 choices[61][3] = "6 a&ntilde;os.";
 answers[61] = 1;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 20. Constituci&oacute;n de 1978";
 preguntaids[61] = 20


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[62]= new Array();
 choices[62][0] = "Anual.";
 choices[62][1] = "Semestral.";
 choices[62][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[62][3] = "Bienal.";
 answers[62] = 2;
 units[62] = ['14'];
 blocks[62] = ['A3'];
 comments[62] = "Id Pregunta: 362. Pol&iacute;ticas de igualdad";
 preguntaids[62] = 362


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[63]= "64)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[63]= new Array();
 choices[63][0] = "La Ley General Tributaria.";
 choices[63][1] = "La Ley Presupuestaria.";
 choices[63][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[63][3] = "Ninguna de las respuestas es correcta.";
 answers[63] = 0;
 units[63] = ['11'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 304. Presupuestos generales";
 preguntaids[63] = 304


//  Id pregunta: 7958 Año de creación de pregunta: 2011
 questions[64]= "65)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[64]= new Array();
 choices[64][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[64][1] = "El n&uacute;mero de canales de alta velocidad disponibles.";
 choices[64][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[64][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[64] = 3;
 units[64] = ['108'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7958. Examen TIC A2 2010";
 preguntaids[64] = 7958


//  Id pregunta: 3471 Año de creación de pregunta: 2006
 questions[65]= "66)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[65]= new Array();
 choices[65][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[65][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[65][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[65][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[65] = 2;
 units[65] = ['19'];
 blocks[65] = ['A4'];
 comments[65] = "Id Pregunta: 3471. ";
 preguntaids[65] = 3471


//  Id pregunta: 3448 Año de creación de pregunta: 2006
 questions[66]= "67)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[66]= new Array();
 choices[66][0] = "Incremento de la productividad";
 choices[66][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[66][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[66][3] = "Todas las anteriores son ciertas";
 answers[66] = 3;
 units[66] = ['72'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3448. ";
 preguntaids[66] = 3448


//  Id pregunta: 9760 Año de creación de pregunta: 2014
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[67]= new Array();
 choices[67][0] = "Robo de los datos desde el cliente";
 choices[67][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red";
 choices[67][2] = "Un troyano en el navegador";
 choices[67][3] = "Escuchas ilegales en la red";
 answers[67] = 2;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 9760. ";
 preguntaids[67] = 9760


//  Id pregunta: 8127 Año de creación de pregunta: 2011
 questions[68]= "69)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA:";
 choices[68]= new Array();
 choices[68][0] = "Lluirex - Valencia";
 choices[68][1] = "MAX - Madrid";
 choices[68][2] = "LinKat - Catalu&ntilde;a";
 choices[68][3] = "mEDUxa - Baleares";
 answers[68] = 3;
 units[68] = ['66'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8127. Examen TIC A2 2010 interna";
 preguntaids[68] = 8127


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[69]= "70)  No es objetivo de la Ley 39/2015:";
 choices[69]= new Array();
 choices[69][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[69][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[69][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[69][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[69] = 2;
 units[69] = ['7', '47'];
 blocks[69] = ['A2', 'B1'];
 comments[69] = "Id Pregunta: 9790. ";
 preguntaids[69] = 9790


//  Id pregunta: 2912 Año de creación de pregunta: 2002
 questions[70]= "71)  Indique una caracter&iacute;stica falsa de Java:";
 choices[70]= new Array();
 choices[70][0] = "Es interpretado y portable a distintas plataformas";
 choices[70][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[70][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[70][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[70] = 3;
 units[70] = ['64', '65'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 2912. ";
 preguntaids[70] = 2912


//  Id pregunta: 5392 Año de creación de pregunta: 2006
 questions[71]= "72)  El t&eacute;rmino JigSaw se refiere a:";
 choices[71]= new Array();
 choices[71][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[71][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[71][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[71][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[71] = 0;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 5392. ";
 preguntaids[71] = 5392


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[72]= new Array();
 choices[72][0] = "Art. 13, L.O.3/2007.";
 choices[72][1] = "Art. 14, L.O.3/2007.";
 choices[72][2] = "Art. 11, L.O.3/2007.";
 choices[72][3] = "Ninguna es correcta.";
 answers[72] = 2;
 units[72] = ['14'];
 blocks[72] = ['A3'];
 comments[72] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[72] = 378


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[73]= new Array();
 choices[73][0] = "Cassandra";
 choices[73][1] = "Riak";
 choices[73][2] = "Avro";
 choices[73][3] = "Zookeeper";
 answers[73] = 3;
 units[73] = ['73'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 754. Big Data y NoSQL";
 preguntaids[73] = 754


//  Id pregunta: 5608 Año de creación de pregunta: 2007
 questions[74]= "75)  Seg&uacute;n la norma ISO/IEC 27002, el aseguramiento de que los usuarios autorizados tienen acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[74]= new Array();
 choices[74][0] = "Seguridad.";
 choices[74][1] = "Integridad.";
 choices[74][2] = "Disponibilidad.";
 choices[74][3] = "Confidencialidad.";
 answers[74] = 2;
 units[74] = ['45'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 5608. ";
 preguntaids[74] = 5608


