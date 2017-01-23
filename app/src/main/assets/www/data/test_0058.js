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
//  Id pregunta: 8507 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[0]= new Array();
 choices[0][0] = "Wowza Media Server";
 choices[0][1] = "Icecast";
 choices[0][2] = "Darwin Streaming Server";
 choices[0][3] = "FlowCast";
 answers[0] = 3;
 units[0] = ['103'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8507. Teleco Ayto. Madrid 2010";
 preguntaids[0] = 8507


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[1]= "2)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[1]= new Array();
 choices[1][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[1][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[1][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[1][3] = "Todas las respuestas son correctas.";
 answers[1] = 3;
 units[1] = ['50'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[1] = 643


//  Id pregunta: 5356 Año de creación de pregunta: 2006
 questions[2]= "3)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[2]= new Array();
 choices[2][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[2][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[2][2] = "Usa claves de 128 bits";
 choices[2][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[2] = 1;
 units[2] = ['120'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5356. ";
 preguntaids[2] = 5356


//  Id pregunta: 2026 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes elementos no se considera un activo de una organizaci&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "Recursos f&iacute;sicos: equipos, sistemas, cableado&hellip;";
 choices[3][1] = "Utilizaci&oacute;n de recursos: uso de CPU, de ancho de banda, de disco duro&hellip;";
 choices[3][2] = "Imagen y reputaci&oacute;n p&uacute;blica y profesional de la empresa y sus empleados";
 choices[3][3] = "Todos los anteriores son activos de una organizaci&oacute;n";
 answers[3] = 3;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2026. ";
 preguntaids[3] = 2026


//  Id pregunta: 7241 Año de creación de pregunta: 2010
 questions[4]= "5)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[4]= new Array();
 choices[4][0] = "RD 951/2003";
 choices[4][1] = "RD 952/2003";
 choices[4][2] = "RD 951/2005";
 choices[4][3] = "RD 951/2006";
 answers[4] = 2;
 units[4] = ['92'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 7241. ";
 preguntaids[4] = 7241


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[5]= "6)  La Administraci&oacute;n General del Estado se organiza:";
 choices[5]= new Array();
 choices[5][0] = "en Ministerios";
 choices[5][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[5][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[5][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[5] = 1;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[5] = 998


//  Id pregunta: 954 Año de creación de pregunta: 2016
 questions[6]= "7)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[6]= new Array();
 choices[6][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[6][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[6][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[6][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[6] = 0;
 units[6] = ['34', '84'];
 blocks[6] = ['B1', 'B3'];
 comments[6] = "Id Pregunta: 954. Metodologias &aacute;giles";
 preguntaids[6] = 954


//  Id pregunta: 2696 Año de creación de pregunta: 2002
 questions[7]= "8)  CICS";
 choices[7]= new Array();
 choices[7][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[7][1] = "Es un servidor de directorio x500";
 choices[7][2] = "Es un monitor transaccional";
 choices[7][3] = "Es un servidor de directorio LDAP";
 answers[7] = 2;
 units[7] = ['51'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2696. ";
 preguntaids[7] = 2696


//  Id pregunta: 7039 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[8]= new Array();
 choices[8][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[8][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[8][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[8][3] = "Ninguna de las anteriores es cierta";
 answers[8] = 1;
 units[8] = ['30'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 7039. ";
 preguntaids[8] = 7039


//  Id pregunta: 2000 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[9]= new Array();
 choices[9][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[9][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[9][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[9][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[9] = 3;
 units[9] = ['42'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2000. ";
 preguntaids[9] = 2000


//  Id pregunta: 9323 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[10]= new Array();
 choices[10][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[10][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[10][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[10][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[10] = 2;
 units[10] = ['117'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 9323. ";
 preguntaids[10] = 9323


//  Id pregunta: 9362 Año de creación de pregunta: 2014
 questions[11]= "12)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[11]= new Array();
 choices[11][0] = "Ping";
 choices[11][1] = "ICMP";
 choices[11][2] = "PPP";
 choices[11][3] = "RSVP";
 answers[11] = 1;
 units[11] = ['109'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9362. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[11] = 9362


//  Id pregunta: 6080 Año de creación de pregunta: 2003
 questions[12]= "13)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[12]= new Array();
 choices[12][0] = "ISO (International Standards Organization).";
 choices[12][1] = "OGC (Open Geospatial Consortium).";
 choices[12][2] = "FGDC (Federal Geographic Data Committee).";
 choices[12][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[12] = 1;
 units[12] = ['71'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 6080. Examen TIC A1 MAP 2007";
 preguntaids[12] = 6080


//  Id pregunta: 9903 Año de creación de pregunta: 2015
 questions[13]= "14)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[13]= new Array();
 choices[13][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[13][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[13][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[13][3] = "Todas las anteriores.";
 answers[13] = 3;
 units[13] = ['7', '19'];
 blocks[13] = ['A2', 'A4'];
 comments[13] = "Id Pregunta: 9903. ";
 preguntaids[13] = 9903


//  Id pregunta: 3675 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es un elemento del modelo EFQM?";
 choices[14]= new Array();
 choices[14][0] = "Impacto en la sociedad";
 choices[14][1] = "Control del dise&ntilde;o";
 choices[14][2] = "Satisfacci&oacute;n del cliente";
 choices[14][3] = "Recursos";
 answers[14] = 1;
 units[14] = ['98'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3675. ";
 preguntaids[14] = 3675


//  Id pregunta: 4831 Año de creación de pregunta: 2002
 questions[15]= "16)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[15]= new Array();
 choices[15][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[15][1] = "Igual velocidad de entrada que de salida";
 choices[15][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[15][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[15] = 1;
 units[15] = ['114'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4831. ";
 preguntaids[15] = 4831


//  Id pregunta: 6674 Año de creación de pregunta: 2009
 questions[16]= "17)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[16]= new Array();
 choices[16][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[16][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[16][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[16][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[16] = 0;
 units[16] = ['84'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6674. MAP 2008 A1";
 preguntaids[16] = 6674


//  Id pregunta: 9875 Año de creación de pregunta: 2015
 questions[17]= "18)  Single Sign-on...";
 choices[17]= new Array();
 choices[17][0] = "&hellip; es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[17][1] = "&hellip; un conjunto de librer&iacute;as open source para identidades federadas.";
 choices[17][2] = "&hellip; una especificaci&oacute;n de mensajes SAML.";
 choices[17][3] = "&hellip; es una informaci&oacute;n almacenada en el navegador del usuario para su consulta posterior.";
 answers[17] = 0;
 units[17] = ['123'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 9875. ";
 preguntaids[17] = 9875


//  Id pregunta: 8430 Año de creación de pregunta: 2011
 questions[18]= "19)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[18]= new Array();
 choices[18][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[18][1] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[18][2] = "La Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[18][3] = "Debe disponer de todas las anteriores";
 answers[18] = 0;
 units[18] = ['2'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 8430. ";
 preguntaids[18] = 8430


//  Id pregunta: 9898 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Qu&eacute; Ley establece el Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas?";
 choices[19]= new Array();
 choices[19][0] = "Ley 40/2015.";
 choices[19][1] = "Ley 40/2014.";
 choices[19][2] = "Ley 39/2015.";
 choices[19][3] = "Ley 41/2015.";
 answers[19] = 2;
 units[19] = ['7', '19'];
 blocks[19] = ['A2', 'A4'];
 comments[19] = "Id Pregunta: 9898. ";
 preguntaids[19] = 9898


//  Id pregunta: 8070 Año de creación de pregunta: 2011
 questions[20]= "21)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[20]= new Array();
 choices[20][0] = "Crecimiento tecnol&oacute;gico";
 choices[20][1] = "Crecimiento inteligente";
 choices[20][2] = "Crecimiento sostenible";
 choices[20][3] = "Crecimiento integrador";
 answers[20] = 0;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 8070. ";
 preguntaids[20] = 8070


//  Id pregunta: 1129 Año de creación de pregunta: 2016
 questions[21]= "22)  La unidad de datos intercambiada en la capa de transporte, seg&uacute;n el modelo OSI de ISO, es:";
 choices[21]= new Array();
 choices[21][0] = "TPDU.";
 choices[21][1] = "Paquete.";
 choices[21][2] = "Trama.";
 choices[21][3] = "TCDU.";
 answers[21] = 0;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 1129. ";
 preguntaids[21] = 1129


//  Id pregunta: 4547 Año de creación de pregunta: 2002
 questions[22]= "23)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[22]= new Array();
 choices[22][0] = "Ethernet con un par extra de hilos";
 choices[22][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[22][2] = "Fast Ethernet con cableado de par trenzado";
 choices[22][3] = "Ninguno de los anteriores";
 answers[22] = 1;
 units[22] = ['104'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4547. ";
 preguntaids[22] = 4547


//  Id pregunta: 10358 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[23]= new Array();
 choices[23][0] = "Org&aacute;nico";
 choices[23][1] = "Acoplado";
 choices[23][2] = "Semiacoplado";
 choices[23][3] = "Empotrado";
 answers[23] = 1;
 units[23] = ['93'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10358. ";
 preguntaids[23] = 10358


//  Id pregunta: 3163 Año de creación de pregunta: 2009
 questions[24]= "25)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[24]= new Array();
 choices[24][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[24][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[24][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[24][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[24] = 2;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 3163. Ley 34/2002, art&iacute;culo 9";
 preguntaids[24] = 3163


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[25]= new Array();
 choices[25][0] = "Ley 3/2015";
 choices[25][1] = "Ley 6/2007";
 choices[25][2] = "Ley 5/1984";
 choices[25][3] = "Ley 5/2006";
 answers[25] = 0;
 units[25] = ['22'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 510. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[25] = 510


//  Id pregunta: 9709 Año de creación de pregunta: 2014
 questions[26]= "27)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[26]= new Array();
 choices[26][0] = "ps -a";
 choices[26][1] = "top";
 choices[26][2] = "fork";
 choices[26][3] = "lsof";
 answers[26] = 3;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9709. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";
 preguntaids[26] = 9709


//  Id pregunta: 6964 Año de creación de pregunta: 2010
 questions[27]= "28)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[27]= new Array();
 choices[27][0] = "Diagrama de Componentes";
 choices[27][1] = "Diagrama de Descomposici&oacute;n";
 choices[27][2] = "Diagrama de Despliegue";
 choices[27][3] = "Diagrama de Estructura";
 answers[27] = 2;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6964. TIC-B 2009 bloque desarrollo";
 preguntaids[27] = 6964


//  Id pregunta: 2509 Año de creación de pregunta: 2004
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[28]= new Array();
 choices[28][0] = "RAID 1";
 choices[28][1] = "RAID 0";
 choices[28][2] = "RAID 2";
 choices[28][3] = "RAID 5";
 answers[28] = 0;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2509. Examen TIC MAP B 2004";
 preguntaids[28] = 2509


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[29]= new Array();
 choices[29][0] = "Conferencia de Presidentes.";
 choices[29][1] = "Convenios de colaboraci&oacute;n.";
 choices[29][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[29][3] = "Conferencias Sectoriales.";
 answers[29] = 0;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[29] = 1042


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[30]= "31)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[30]= new Array();
 choices[30][0] = "Primario, que incluye la agricultura y la pesca";
 choices[30][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[30][2] = "Minero, junto con las exportaciones de comercio";
 choices[30][3] = "Servicios";
 answers[30] = 3;
 units[30] = ['12'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 343. Modelo econ&oacute;mico";
 preguntaids[30] = 343


//  Id pregunta: 1432 Año de creación de pregunta: 2016
 questions[31]= "32)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:";
 choices[31]= new Array();
 choices[31][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[31][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[31][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[31][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[31] = 0;
 units[31] = ['1'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 1432. ";
 preguntaids[31] = 1432


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[32]= "33)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[32]= new Array();
 choices[32][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[32][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[32][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[32][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[32] = 3;
 units[32] = ['20'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 489. Direcci&oacute;n p&uacute;blica";
 preguntaids[32] = 489


//  Id pregunta: 1567 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; se entiende por tiempo de convergencia cuando hablamos de routers?";
 choices[33]= new Array();
 choices[33][0] = "Tiempo que tardan dos datagramas que siguen distinto encaminamiento en llegar al router final.";
 choices[33][1] = "Rapidez con la cual los routers de la red comparten informaci&oacute;n de enrutamiento.";
 choices[33][2] = "Tiempo que tarda un paquete en alcanzar su destino atravesando el m&iacute;nimo n&uacute;mero de routers posible.";
 choices[33][3] = "Tiempo medio que tarda un paquete en alcanzar cualquier nodo de la red, desde un mismo origen.";
 answers[33] = 1;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1567. ";
 preguntaids[33] = 1567


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[34]= "35)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[34]= new Array();
 choices[34][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[34][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[34][2] = "La protecci&oacute;n del medio ambiente.";
 choices[34][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[34] = 0;
 units[34] = ['22'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 498. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[34] = 498


//  Id pregunta: 3953 Año de creación de pregunta: 2002
 questions[35]= "36)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[35][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[35][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[35][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[35] = 2;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 3953. ";
 preguntaids[35] = 3953


//  Id pregunta: 10520 Año de creación de pregunta: 2015
 questions[36]= "37)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[36]= new Array();
 choices[36][0] = "LSR";
 choices[36][1] = "LER";
 choices[36][2] = "LSP";
 choices[36][3] = "FEC";
 answers[36] = 0;
 units[36] = ['107'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10520. ";
 preguntaids[36] = 10520


//  Id pregunta: 7063 Año de creación de pregunta: 2010
 questions[37]= "38)  Las reglas de integridad en una base de datos relacional son:";
 choices[37]= new Array();
 choices[37][0] = "Integridad de claves con las claves ajenas";
 choices[37][1] = "Integridad de entidad e integridad referencial";
 choices[37][2] = "Integridad referente a las claves";
 choices[37][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[37] = 1;
 units[37] = ['61'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7063. ";
 preguntaids[37] = 7063


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n se indica en la Ley 59/2003, de firma electr&oacute;nica, en cuanto al r&eacute;gimen de prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[38][1] = "Los &oacute;rganos de defensa de la competencia velar&aacute;n por el mantenimiento de condiciones de competencia efectiva en la prestaci&oacute;n de servicios de certificaci&oacute;n al p&uacute;blico mediante el ejercicio de las funciones que tengan legalmente atribuidas.";
 choices[38][2] = "No podr&aacute;n ser proporcionados por las Administraciones p&uacute;blicas, sus organismos p&uacute;blicos o las entidades dependientes o vinculadas a las mismas por motivo de los principios de objetividad, transparencia y no discriminaci&oacute;n.";
 choices[38][3] = "No se realizar&aacute; en r&eacute;gimen de libre competencia.";
 answers[38] = 1;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 442. AGE A2 2015";
 preguntaids[38] = 442


//  Id pregunta: 7508 Año de creación de pregunta: 2010
 questions[39]= "40)  El entorno Microsoft, WebDAV:";
 choices[39]= new Array();
 choices[39][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio.";
 choices[39][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e Intranets.";
 choices[39][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red.";
 choices[39][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos.";
 answers[39] = 1;
 units[39] = ['63'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7508. Map 2005";
 preguntaids[39] = 7508


//  Id pregunta: 2313 Año de creación de pregunta: 2002
 questions[40]= "41)  Un activo es, de acuerdo a MAGERIT:";
 choices[40]= new Array();
 choices[40][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[40][1] = "Resultado de una agresi&oacute;n";
 choices[40][2] = "Evento que desencadena un incidente";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = 3;
 units[40] = ['36'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2313. ";
 preguntaids[40] = 2313


//  Id pregunta: 9795 Año de creación de pregunta: 2015
 questions[41]= "42)  La Ley 56/2007 de medidas de Impulso de la Sociedad de la Informaci&oacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Modifica las leyes 34/2002, 59/2003 y 7/1996.";
 choices[41][1] = "Introduce normativa sobre facturaci&oacute;n electr&oacute;nica.";
 choices[41][2] = "Elimina la intervenci&oacute;n del MINETUR para dirigirse a los prestadores de servicios de intermediaci&oacute;n.";
 choices[41][3] = "Todas las anteriores.";
 answers[41] = 3;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 9795. ";
 preguntaids[41] = 9795


//  Id pregunta: 7948 Año de creación de pregunta: 2011
 questions[42]= "43)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener:";
 choices[42]= new Array();
 choices[42][0] = "Retardo constante y tasa de bit variable.";
 choices[42][1] = "Retardo variable y tasa de bit constante.";
 choices[42][2] = "Retardo variable y tasa de bit variable.";
 choices[42][3] = "Retardo constante y tasa de bit constante.";
 answers[42] = 0;
 units[42] = ['107'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 7948. Examen TIC A2 2010";
 preguntaids[42] = 7948


//  Id pregunta: 4391 Año de creación de pregunta: 2002
 questions[43]= "44)  ASP significa:";
 choices[43]= new Array();
 choices[43][0] = "Application Service Provider";
 choices[43][1] = "Active Server Pages";
 choices[43][2] = "Las 2 respuestas anteriores son correctas";
 choices[43][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[43] = 2;
 units[43] = ['62'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 4391. ";
 preguntaids[43] = 4391


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[44]= "45)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[44]= new Array();
 choices[44][0] = "apud acta";
 choices[44][1] = "presencialmente";
 choices[44][2] = "electr&oacute;nicamente";
 choices[44][3] = "todas son correctas";
 answers[44] = 3;
 units[44] = ['7'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 235. Ley 39/2015";
 preguntaids[44] = 235


//  Id pregunta: 6302 Año de creación de pregunta: 2003
 questions[45]= "46)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[45]= new Array();
 choices[45][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[45][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[45][2] = "Los clientes, competidores y accionistas";
 choices[45][3] = "Todas las anteriores.";
 answers[45] = 3;
 units[45] = ['83'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6302. ";
 preguntaids[45] = 6302


//  Id pregunta: 5367 Año de creación de pregunta: 2006
 questions[46]= "47)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[46]= new Array();
 choices[46][0] = "RJ11 de 6 contactos";
 choices[46][1] = "RJ45 de 6 contactos";
 choices[46][2] = "RJ45 de 8 contactos";
 choices[46][3] = "RJ49 para cables STP";
 answers[46] = 2;
 units[46] = ['104'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5367. ";
 preguntaids[46] = 5367


//  Id pregunta: 6303 Año de creación de pregunta: 2003
 questions[47]= "48)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta";
 choices[47]= new Array();
 choices[47][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[47][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[47][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[47][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[47] = 2;
 units[47] = ['83'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6303. ";
 preguntaids[47] = 6303


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[48]= "49)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[48]= new Array();
 choices[48][0] = "Firma electr&oacute;nica avanzada";
 choices[48][1] = "Firma electr&oacute;nica reconocida";
 choices[48][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = 1;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[48] = 2483


//  Id pregunta: 9354 Año de creación de pregunta: 2014
 questions[49]= "50)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[49]= new Array();
 choices[49][0] = "Joost";
 choices[49][1] = "Netflix";
 choices[49][2] = "Cassandra";
 choices[49][3] = "Hadoop";
 answers[49] = 3;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9354. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[49] = 9354


//  Id pregunta: 7749 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?";
 choices[50]= new Array();
 choices[50][0] = "XSL-FO.";
 choices[50][1] = "XPath.";
 choices[50][2] = "XSLT.";
 choices[50][3] = "XForms.";
 answers[50] = 1;
 units[50] = ['74'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7749. ";
 preguntaids[50] = 7749


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[51]= new Array();
 choices[51][0] = "Indirecta.";
 choices[51][1] = "Directa.";
 choices[51][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[51][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[51] = 1;
 units[51] = ['14'];
 blocks[51] = ['A3'];
 comments[51] = "Id Pregunta: 370. Pol&iacute;ticas de igualdad";
 preguntaids[51] = 370


//  Id pregunta: 10687 Año de creación de pregunta: 2015
 questions[52]= "53)  La tasa de rentabilidad que se emplea para calcular el Valor Actual Neto (VAN) de una inversi&oacute;n es:";
 choices[52]= new Array();
 choices[52][0] = "La tasa de rentabilidad esperada para esa inversi&oacute;n.";
 choices[52][1] = "La tasa de rentabilidad exigida para esa inversi&oacute;n.";
 choices[52][2] = "La tasa de inflaci&oacute;n.";
 choices[52][3] = "Ninguna de las anteriores.";
 answers[52] = 1;
 units[52] = ['40'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 10687. ";
 preguntaids[52] = 10687


//  Id pregunta: 7504 Año de creación de pregunta: 2010
 questions[53]= "54)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[53]= new Array();
 choices[53][0] = "JavaMicro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java.";
 choices[53][1] = "Los Java Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java.";
 choices[53][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http.";
 choices[53][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet.";
 answers[53] = 2;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7504. Similar a Map 2005";
 preguntaids[53] = 7504


//  Id pregunta: 9498 Año de creación de pregunta: 2014
 questions[54]= "55)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[54]= new Array();
 choices[54][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[54][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[54][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[54][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[54] = 1;
 units[54] = ['117'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9498. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";
 preguntaids[54] = 9498


//  Id pregunta: 9039 Año de creación de pregunta: 2014
 questions[55]= "56)  Una licencia RISP debe reflejar:";
 choices[55]= new Array();
 choices[55][0] = "Finalidad concreta";
 choices[55][1] = "Duraci&oacute;n de la licencia";
 choices[55][2] = "Modalidades financieras";
 choices[55][3] = "Todas las anteriores";
 answers[55] = 3;
 units[55] = ['27'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 9039. Debe reflejar: finalidad concreta (comercial o no comercial), duraci&oacute;n, obligaciones del beneficiario y del organismo cedente, responsabilidades de uso, modalidades financieras (gratuito, tasa o precio p&uacute;blico)";
 preguntaids[55] = 9039


//  Id pregunta: 6326 Año de creación de pregunta: 2003
 questions[56]= "57)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[56]= new Array();
 choices[56][0] = "USB sin hilos";
 choices[56][1] = "WiMax";
 choices[56][2] = "Bluetooth";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 3;
 units[56] = ['112'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 6326. ";
 preguntaids[56] = 6326


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[57]= new Array();
 choices[57][0] = "De los derechos y deberes fundamentales.";
 choices[57][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[57][2] = "Derechos y libertades.";
 choices[57][3] = "De la Corona.";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 48. Constituci&oacute;n de 1978";
 preguntaids[57] = 48


//  Id pregunta: 3118 Año de creación de pregunta: 2002
 questions[58]= "59)  Con AGP se pretende:";
 choices[58]= new Array();
 choices[58][0] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el procesador";
 choices[58][1] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el disco duro";
 choices[58][2] = "Aislar el subsistema de v&iacute;deo de la arquitectura ISA";
 choices[58][3] = "Separar los subsistemas de audio y v&iacute;deo del bus principal";
 answers[58] = 0;
 units[58] = ['53'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3118. ";
 preguntaids[58] = 3118


//  Id pregunta: 9597 Año de creación de pregunta: 2014
 questions[59]= "60)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[59]= new Array();
 choices[59][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[59][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[59][2] = "Ambos operan a nivel de bloque.";
 choices[59][3] = "Ambos operan a nivel de fichero.";
 answers[59] = 0;
 units[59] = ['53'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9597. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[59] = 9597


//  Id pregunta: 10404 Año de creación de pregunta: 2015
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[60]= new Array();
 choices[60][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[60][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[60][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[60][3] = "Todos los anteriores";
 answers[60] = 3;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 10404. ";
 preguntaids[60] = 10404


//  Id pregunta: 10961 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;C&oacute;mo se llama la unidad encargada de la contrataci&oacute;n centralizada en el &aacute;mbito de la Administraci&oacute;n General del Estado?";
 choices[61]= new Array();
 choices[61][0] = "Subdirecci&oacute;n General de Compras";
 choices[61][1] = "Central de Compras Estatal";
 choices[61][2] = "Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n";
 choices[61][3] = "Direcci&oacute;n General de Patrimonio del Estado";
 answers[61] = 2;
 units[61] = ['37'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 10961. ";
 preguntaids[61] = 10961


//  Id pregunta: 10675 Año de creación de pregunta: 2015
 questions[62]= "63)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[62]= new Array();
 choices[62][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[62][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[62][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[62][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[62] = 0;
 units[62] = ['22'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 10675. ";
 preguntaids[62] = 10675


//  Id pregunta: 2238 Año de creación de pregunta: 2009
 questions[63]= "64)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[63]= new Array();
 choices[63][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[63][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[63][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[63][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[63] = 2;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2238. ";
 preguntaids[63] = 2238


//  Id pregunta: 9893 Año de creación de pregunta: 2015
 questions[64]= "65)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[64]= new Array();
 choices[64][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[64][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[64][2] = "Ambas";
 choices[64][3] = "Ninguna de las anteriores.";
 answers[64] = 2;
 units[64] = ['7', '19'];
 blocks[64] = ['A2', 'A4'];
 comments[64] = "Id Pregunta: 9893. Art 21, Ley 39/2015";
 preguntaids[64] = 9893


//  Id pregunta: 6694 Año de creación de pregunta: 2009
 questions[65]= "66)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[65]= new Array();
 choices[65][0] = "ln";
 choices[65][1] = "mkdir";
 choices[65][2] = "ls";
 choices[65][3] = "mv";
 answers[65] = 0;
 units[65] = ['57'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6694. ";
 preguntaids[65] = 6694


//  Id pregunta: 7290 Año de creación de pregunta: 2010
 questions[66]= "67)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[66]= new Array();
 choices[66][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[66][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[66][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = 2;
 units[66] = ['35'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 7290. ";
 preguntaids[66] = 7290


//  Id pregunta: 5857 Año de creación de pregunta: 2007
 questions[67]= "68)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[67]= new Array();
 choices[67][0] = "An&aacute;lisis de riesgos";
 choices[67][1] = "An&aacute;lisis de impacto";
 choices[67][2] = "Disponibilidad";
 choices[67][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[67] = 1;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5857. Examen 2006 JCYL";
 preguntaids[67] = 5857


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[68]= "69)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[68]= new Array();
 choices[68][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[68][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[68][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[68][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[68] = 2;
 units[68] = ['7', '47'];
 blocks[68] = ['A2', 'B1'];
 comments[68] = "Id Pregunta: 9782. ";
 preguntaids[68] = 9782


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[69]= "70)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[69]= new Array();
 choices[69][0] = "Un recurso de incumplimiento.";
 choices[69][1] = "Recurso de carencia.";
 choices[69][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[69][3] = "Ninguna es correcta.";
 answers[69] = 2;
 units[69] = ['5'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 192. Uni&oacute;n Europea";
 preguntaids[69] = 192


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[70]= "71)  La Poblaci&oacute;n Activa incluye a:";
 choices[70]= new Array();
 choices[70][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[70][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[70][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[70][3] = "Todo aquel que desea trabajar";
 answers[70] = 2;
 units[70] = ['15'];
 blocks[70] = ['A3'];
 comments[70] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[70] = 415


//  Id pregunta: 5985 Año de creación de pregunta: 2007
 questions[71]= "72)  Son &oacute;rganos de contrataci&oacute;n";
 choices[71]= new Array();
 choices[71][0] = "Los Ministros y los Secretarios de Estado";
 choices[71][1] = "Los representantes legales de los Organismos aut&oacute;nomos y dem&aacute;s Entidades p&uacute;blicas estatales y los Directores Generales de las distintas Entidades gestoras y Servicios comunes de la Seguridad Social.";
 choices[71][2] = "a) y b) son correctas";
 choices[71][3] = "El Subsecretario de Hacienda";
 answers[71] = 2;
 units[71] = ['37'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5985. Art. 316 RD Legislativo 3/2011";
 preguntaids[71] = 5985


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[72]= "73)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[72]= new Array();
 choices[72][0] = "El acoso sexual.";
 choices[72][1] = "El acoso por raz&oacute;n del sexo.";
 choices[72][2] = "Ambas son correctas.";
 choices[72][3] = "A y B son incorrectas.";
 answers[72] = 2;
 units[72] = ['14'];
 blocks[72] = ['A3'];
 comments[72] = "Id Pregunta: 401. Pol&iacute;ticas de igualdad";
 preguntaids[72] = 401


//  Id pregunta: 9200 Año de creación de pregunta: 2014
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[73]= new Array();
 choices[73][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[73][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros.";
 choices[73][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos.";
 choices[73][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta.";
 answers[73] = 0;
 units[73] = ['119'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 9200. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[73] = 9200


//  Id pregunta: 8251 Año de creación de pregunta: 2011
 questions[74]= "75)  Los protocolos b&aacute;sicos usados en una red de &aacute;rea de almacenamiento son:";
 choices[74]= new Array();
 choices[74][0] = "Fibre Channel Arbitrated Loop, Fibre Channel Switched y Small Computer System Interface";
 choices[74][1] = "Fibre Channel Arbitrated Loop y Fibre Channel Small Loop";
 choices[74][2] = "Small Computer System Interface y Fibre Channel Small Loop";
 choices[74][3] = "Fibre Channel Small Loop, Address Resolution Protocol y Network File System";
 answers[74] = 0;
 units[74] = ['53'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 8251. Examen UPM A2 2011";
 preguntaids[74] = 8251


