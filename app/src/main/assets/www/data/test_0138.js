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
//  Id pregunta: 5848 Año de creación de pregunta: 2007
 questions[0]= "1)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[0]= new Array();
 choices[0][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[0][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[0][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[0][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[0] = 2;
 units[0] = ['103'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5848. Examen 2006 JCYL";
 preguntaids[0] = 5848


//  Id pregunta: 4855 Año de creación de pregunta: 2002
 questions[1]= "2)  En una red de &aacute;rea extensa (WAN):";
 choices[1]= new Array();
 choices[1][0] = "Los tiempos de propagaci&oacute;n son bajos";
 choices[1][1] = "Las velocidades de transmisi&oacute;n de datos son lentas, sobre todo comparadas con las LAN";
 choices[1][2] = "Baja tasa de errores, haciendo innecesario procedimientos efectivos para la detecci&oacute;n y su recuperaci&oacute;n";
 choices[1][3] = "Los retrasos son predecibles";
 answers[1] = 1;
 units[1] = ['112'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4855. ";
 preguntaids[1] = 4855


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[2]= "3)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[2]= new Array();
 choices[2][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[2][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[2][2] = "Al Congreso de los Diputados.";
 choices[2][3] = "Al Gobierno.";
 answers[2] = 3;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 64. Constituci&oacute;n de 1978";
 preguntaids[2] = 64


//  Id pregunta: 9203 Año de creación de pregunta: 2014
 questions[3]= "4)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Un caballo de Troya.";
 choices[3][1] = "Un virus.";
 choices[3][2] = "Un gusano.";
 choices[3][3] = "El tal&oacute;n de Aquiles.";
 answers[3] = 0;
 units[3] = ['119'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 9203. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";
 preguntaids[3] = 9203


//  Id pregunta: 4237 Año de creación de pregunta: 2006
 questions[4]= "5)  En el modelo EFQM la suma de puntuaci&oacute;n m&aacute;xima de todos los criterios es 1000. &iquest;C&uacute;al de los siguientes criterios da m&aacute;s puntuaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Impacto social";
 choices[4][1] = "Resultado global del negocio";
 choices[4][2] = "Satisfacci&oacute;n de los clientes";
 choices[4][3] = "Procesos";
 answers[4] = 2;
 units[4] = ['93'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 4237. ";
 preguntaids[4] = 4237


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[5]= "6)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[5]= new Array();
 choices[5][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[5][1] = "Uno de sus miembros.";
 choices[5][2] = "La Comisi&oacute;n.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = 3;
 units[5] = ['5'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 170. Uni&oacute;n Europea";
 preguntaids[5] = 170


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[6]= "7)  En el contexto de las bases de datos que siguen el modelo relacional, una superclave es:";
 choices[6]= new Array();
 choices[6][0] = "Una clave candidata m&iacute;nima, es decir, una clave candidata formada por un solo atributo.";
 choices[6][1] = "Una clave candidata siempre.";
 choices[6][2] = "Una clave primaria combinada con un identificador &uacute;nico generado por el gestor de base de datos, con el fin de reforzar la integridad y seguridad de la informaci&oacute;n.";
 choices[6][3] = "Un atributo o conjunto de atributos que permite identificar de forma &uacute;nica una fila en una tabla.";
 answers[6] = 3;
 units[6] = ['61'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 692. AGE A2 2015";
 preguntaids[6] = 692


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[7]= "8)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[7]= new Array();
 choices[7][0] = "Enero de 2015.";
 choices[7][1] = "Enero de 2016.";
 choices[7][2] = "Diciembre de 2016.";
 choices[7][3] = "Diciembre de 2015.";
 answers[7] = 0;
 units[7] = ['10'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[7] = 10125


//  Id pregunta: 3815 Año de creación de pregunta: 2002
 questions[8]= "9)  En la medici&oacute;n de la productividad en el software orientado a objetos, &iquest;cu&aacute;l de los siguientes criterios es el m&aacute;s importante?:";
 choices[8]= new Array();
 choices[8][0] = "La cantidad de software producido por unidad de tiempo";
 choices[8][1] = "La reutilizaci&oacute;n del software producido";
 choices[8][2] = "El seguimiento estricto de una metodolog&iacute;a";
 choices[8][3] = "La calidad de software en cu&aacute;nto al cumplimiento de la funcionalidad requerida";
 answers[8] = 1;
 units[8] = ['93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3815. ";
 preguntaids[8] = 3815


//  Id pregunta: 10235 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[9]= new Array();
 choices[9][0] = "Fue creado por Peter Chen";
 choices[9][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[9][2] = "Las estructuras de datos son complejas";
 choices[9][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[9] = 1;
 units[9] = ['61'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10235. ";
 preguntaids[9] = 10235


//  Id pregunta: 3622 Año de creación de pregunta: 2002
 questions[10]= "11)  En an&aacute;lisis documental al nivel en el que se extraen las palabras claves m&aacute;s representativas del contenido del documento, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Nivel de asiento";
 choices[10][1] = "Nivel de descriptor";
 choices[10][2] = "Nivel de resumen";
 choices[10][3] = "Nivel documental";
 answers[10] = 1;
 units[10] = ['99'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3622. ";
 preguntaids[10] = 3622


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[11]= "12)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[11]= new Array();
 choices[11][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[11][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[11][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[11][3] = "Ninguno de los anteriores";
 answers[11] = 2;
 units[11] = ['2'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 8433. ";
 preguntaids[11] = 8433


//  Id pregunta: 8812 Año de creación de pregunta: 2013
 questions[12]= "13)  Acerca de Fibre Channel, se puede decir:";
 choices[12]= new Array();
 choices[12][0] = "El protocolo sigue el modelo de referencia OSI.";
 choices[12][1] = "Es un protocolo con 5 capas.";
 choices[12][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[12][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[12] = 1;
 units[12] = ['53', '106'];
 blocks[12] = ['B2', 'B4'];
 comments[12] = "Id Pregunta: 8812. ";
 preguntaids[12] = 8812


//  Id pregunta: 9234 Año de creación de pregunta: 2014
 questions[13]= "14)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[13]= new Array();
 choices[13][0] = "Consultores.";
 choices[13][1] = "Expertos.";
 choices[13][2] = "Analistas.";
 choices[13][3] = "Jefes de Proyecto.";
 answers[13] = 0;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 9234. Examen TIC A1 2013";
 preguntaids[13] = 9234


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[14]= new Array();
 choices[14][0] = "El rey, a propuesta del Gobierno.";
 choices[14][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[14][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[14][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[14] = 1;
 units[14] = ['1'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[14] = 37


//  Id pregunta: 2513 Año de creación de pregunta: 2004
 questions[15]= "16)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[15]= new Array();
 choices[15][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[15][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[15][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[15][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[15] = 3;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 2513. Examen TIC MAP B 2004";
 preguntaids[15] = 2513


//  Id pregunta: 1412 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[16]= new Array();
 choices[16][0] = "ATSC";
 choices[16][1] = "ISDB-T";
 choices[16][2] = "DVB-T";
 choices[16][3] = "EDTVB";
 answers[16] = 2;
 units[16] = ['115'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 1412. ";
 preguntaids[16] = 1412


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[17]= "18)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[17]= new Array();
 choices[17][0] = "solo mediante ley";
 choices[17][1] = "reglamentariamente";
 choices[17][2] = "mediante ley o reglamentariamente";
 choices[17][3] = "ninguna es correcta";
 answers[17] = 0;
 units[17] = ['7'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[17] = 212


//  Id pregunta: 9678 Año de creación de pregunta: 2014
 questions[18]= "19)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[18]= new Array();
 choices[18][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[18][1] = "Es una alternativa a XML en AJAX.";
 choices[18][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[18][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[18] = 2;
 units[18] = ['55'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9678. ";
 preguntaids[18] = 9678


//  Id pregunta: 10162 Año de creación de pregunta: 2015
 questions[19]= "20)  NO es una plataforma de virtualizaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "KVM.";
 choices[19][1] = "XEN.";
 choices[19][2] = "Hyper-V.";
 choices[19][3] = "VSuite.";
 answers[19] = 3;
 units[19] = ['124'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10162. Examen TIC A1 2014";
 preguntaids[19] = 10162


//  Id pregunta: 9015 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[20]= new Array();
 choices[20][0] = "Signals";
 choices[20][1] = "Mutex";
 choices[20][2] = "Sockets";
 choices[20][3] = "RPCs";
 answers[20] = 1;
 units[20] = ['58'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9015. ";
 preguntaids[20] = 9015


//  Id pregunta: 7420 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente virtualizaci&oacute;n de sistemas?";
 choices[21]= new Array();
 choices[21][0] = "Eficiencia";
 choices[21][1] = "Control de Recursos";
 choices[21][2] = "Equivalencia";
 choices[21][3] = "Escalabilidad";
 answers[21] = 3;
 units[21] = ['124'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 7420. Examen TIC B 2009";
 preguntaids[21] = 7420


//  Id pregunta: 9562 Año de creación de pregunta: 2014
 questions[22]= "23)  En cuanto a las estrategias de inferencia en marcos";
 choices[22]= new Array();
 choices[22][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[22][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[22][2] = "Ambas son ciertas";
 choices[22][3] = "Ninguna es cierta";
 answers[22] = 2;
 units[22] = ['68'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9562. ";
 preguntaids[22] = 9562


//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[23]= "24)  La recusaci&oacute;n se plantear&aacute;...";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo verbalmente";
 choices[23][1] = "S&oacute;lo por escrito";
 choices[23][2] = "Verbalmente o por escrito";
 choices[23][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[23] = 1;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[23] = 1026


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[24]= "25)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[24]= new Array();
 choices[24][0] = "Ley org&aacute;nica.";
 choices[24][1] = "Ley ordinaria.";
 choices[24][2] = "Ley de bases.";
 choices[24][3] = "Ley marco.";
 answers[24] = 2;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 98. Constituci&oacute;n de 1978";
 preguntaids[24] = 98


//  Id pregunta: 9694 Año de creación de pregunta: 2014
 questions[25]= "26)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[25]= new Array();
 choices[25][0] = "No est&aacute; restringido a redes unix";
 choices[25][1] = "Usa notaci&oacute;n ASN.1";
 choices[25][2] = "No soporta implementaciones de software libre";
 choices[25][3] = "Se usa sobre TCP/IP";
 answers[25] = 0;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9694. ";
 preguntaids[25] = 9694


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[26]= "27)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[26]= new Array();
 choices[26][0] = "Los cr&eacute;ditos";
 choices[26][1] = "Las partidas presupuestarias";
 choices[26][2] = "Los derechos";
 choices[26][3] = "Las obligaciones";
 answers[26] = 3;
 units[26] = ['11'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[26] = 270


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[27]= new Array();
 choices[27][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[27][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[27][2] = "A) y B) son verdaderas";
 choices[27][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[27] = 2;
 units[27] = ['73'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 746. Big Data y NoSQL";
 preguntaids[27] = 746


//  Id pregunta: 6953 Año de creación de pregunta: 2010
 questions[28]= "29)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[28]= new Array();
 choices[28][0] = "T&eacute;cnicos de sistemas";
 choices[28][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[28][2] = "Programadores";
 choices[28][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[28] = 1;
 units[28] = ['91'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 6953. TIC-B 2009 bloque desarrollo";
 preguntaids[28] = 6953


//  Id pregunta: 2882 Año de creación de pregunta: 2002
 questions[29]= "30)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[29]= new Array();
 choices[29][0] = "El n&uacute;mero de i-nodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[29][1] = "El n&uacute;mero de i-nodo y el nombre del fichero";
 choices[29][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el principio de los datos";
 choices[29][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[29] = 1;
 units[29] = ['57'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2882. ";
 preguntaids[29] = 2882


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[30]= "31)  Recientemente se ha publicado la norma de calidad ISO 9000:2015. Al igual que la ISO 9000:2008 se basa en principios. Indique de los siguientes cu&aacute;l NO es un principio de la ISO 9000:2015:";
 choices[30]= new Array();
 choices[30][0] = "Enfoque al cliente.";
 choices[30][1] = "Liderazgo.";
 choices[30][2] = "Gesti&oacute;n de las relaciones.";
 choices[30][3] = "Enfoque al beneficio.";
 answers[30] = 3;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 849. AGE A2 2015";
 preguntaids[30] = 849


//  Id pregunta: 1464 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Puede darse el caso de un sistema que sea, a la vez, multiusuario y monotarea?";
 choices[31]= new Array();
 choices[31][0] = "No, si es multiusuario, siempre ser&aacute; multitarea.";
 choices[31][1] = "S&iacute;, en ese caso se admiten varios usuarios al mismo tiempo, pero cada uno de ellos puede estar haciendo s&oacute;lo una tarea a la vez.";
 choices[31][2] = "S&iacute;, pero s&oacute;lo si el n&uacute;mero de usuarios es de 2, como m&aacute;ximo, ejecutando tareas alternativamente.";
 choices[31][3] = "S&iacute;, pero s&oacute;lo si se utiliza un sistema gesti&oacute;n de identidades que controle el acceso de los usuarios, de tal forma que act&uacute;e como sem&aacute;foro.";
 answers[31] = 1;
 units[31] = ['56'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1464. ";
 preguntaids[31] = 1464


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[32]= new Array();
 choices[32][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[32][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[32][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[32][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[32] = 0;
 units[32] = ['1'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 47. Constituci&oacute;n de 1978";
 preguntaids[32] = 47


//  Id pregunta: 1467 Año de creación de pregunta: 2016
 questions[33]= "34)  Android es un sistema operativo basado en:";
 choices[33]= new Array();
 choices[33][0] = "UNIX.";
 choices[33][1] = "Palm OS.";
 choices[33][2] = "Google.";
 choices[33][3] = "Linux.";
 answers[33] = 3;
 units[33] = ['59'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1467. ";
 preguntaids[33] = 1467


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[34]= new Array();
 choices[34][0] = "Al Consejo Europeo.";
 choices[34][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[34][2] = "A la Comisi&oacute;n Europea.";
 choices[34][3] = "Al Parlamento Europeo.";
 answers[34] = 2;
 units[34] = ['5'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 116. Uni&oacute;n Europea";
 preguntaids[34] = 116


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[35]= new Array();
 choices[35][0] = "23";
 choices[35][1] = "25";
 choices[35][2] = "14";
 choices[35][3] = "18";
 answers[35] = 1;
 units[35] = ['5'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 163. Uni&oacute;n Europea";
 preguntaids[35] = 163


//  Id pregunta: 6248 Año de creación de pregunta: 2003
 questions[36]= "37)  En el modelo E/R, las relaciones d&eacute;biles:";
 choices[36]= new Array();
 choices[36][0] = "Relacionan una entidad fuerte con dos o m&aacute;s entidades, fuertes o d&eacute;biles";
 choices[36][1] = "Relacionan dos entidades d&eacute;biles";
 choices[36][2] = "Relacionan una entidad d&eacute;bil con una fuerte";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = 2;
 units[36] = ['85'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 6248. ";
 preguntaids[36] = 6248


//  Id pregunta: 7444 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "CEN";
 choices[37][1] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[37][2] = "CENELEC";
 choices[37][3] = "Todos los anteriores son organismos europeos de normalizaci&oacute;n";
 answers[37] = 1;
 units[37] = ['48'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 7444. ";
 preguntaids[37] = 7444


//  Id pregunta: 2910 Año de creación de pregunta: 2002
 questions[38]= "39)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[38]= new Array();
 choices[38][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[38][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[38][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[38][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[38] = 0;
 units[38] = ['55'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2910. ";
 preguntaids[38] = 2910


//  Id pregunta: 4203 Año de creación de pregunta: 2006
 questions[39]= "40)  Sobre la elaboraci&oacute;n de un prototipo es cierto que...";
 choices[39]= new Array();
 choices[39][0] = "El que los usuarios finales vean en el prototipo una versi&oacute;n definitiva del software no es un problema t&iacute;pico de los prototipos desechables.";
 choices[39][1] = "Los prototipos desechables se utilizan en desarrollos en cascada.";
 choices[39][2] = "No se suelen considerar aspectos de calidad pero s&iacute; de facilidad de mantenimiento.";
 choices[39][3] = "El que los usuarios finales vean en el prototipo una versi&oacute;n definitiva del software es un problema t&iacute;pico de los prototipos evolutivos.";
 answers[39] = 1;
 units[39] = ['90'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 4203. ";
 preguntaids[39] = 4203


//  Id pregunta: 7772 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[40]= new Array();
 choices[40][0] = "BPML.";
 choices[40][1] = "BPEL.";
 choices[40][2] = "BPMN.";
 choices[40][3] = "XPDL.";
 answers[40] = 3;
 units[40] = ['86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 7772. ";
 preguntaids[40] = 7772


//  Id pregunta: 5115 Año de creación de pregunta: 2003
 questions[41]= "42)  &iquest;Qu&eacute; es Javascript7:";
 choices[41]= new Array();
 choices[41][0] = "Un compilador de Java.";
 choices[41][1] = "Un generador de applets Java";
 choices[41][2] = "Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[41][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[41] = 3;
 units[41] = ['62'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5115. Junta Andaluc&iacute;a";
 preguntaids[41] = 5115


//  Id pregunta: 7131 Año de creación de pregunta: 2010
 questions[42]= "43)  Cuando un trabajador asalariado cree un programa de ordenador, en el ejercicio de las funciones que le han sido confiadas o siguiendo las instrucciones de su empresario, &iquest;a qui&eacute;n corresponde la titularidad de los derechos de explotaci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Al empresario, salvo pacto en contrario";
 choices[42][1] = "Al trabajador, en todo caso";
 choices[42][2] = "Al empresario, en todo caso";
 choices[42][3] = "Al trabajador, salvo pacto en contrario";
 answers[42] = 0;
 units[42] = ['41'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 7131. Art&iacute;culo 97 RDL 1/1996";
 preguntaids[42] = 7131


//  Id pregunta: 10680 Año de creación de pregunta: 2015
 questions[43]= "44)  La transmisi&oacute;n de los derechos morales de autor a favor de los herederos puede realizarse";
 choices[43]= new Array();
 choices[43][0] = "Mediante un contrato de cesi&oacute;n, donaci&oacute;n o compraventa.";
 choices[43][1] = "Incluyendo la transmisi&oacute;n de los derechos en la herencia.";
 choices[43][2] = "De cualquiera de las formas mencionadas en los apartados anteriores.";
 choices[43][3] = "Todas las anteriores son falsas.";
 answers[43] = 3;
 units[43] = ['41'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 10680. ";
 preguntaids[43] = 10680


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[44]= "45)  En UML, los diagramas que resaltan la ordenaci&oacute;n temporal de los mensajes que se intercambian los objetos, se denominan:";
 choices[44]= new Array();
 choices[44][0] = "Diagramas de secuencia.";
 choices[44][1] = "Diagramas de colaboraci&oacute;n.";
 choices[44][2] = "Diagramas de componentes.";
 choices[44][3] = "Diagrama de actividades.";
 answers[44] = 0;
 units[44] = ['85'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 805. AGE A2 2015";
 preguntaids[44] = 805


//  Id pregunta: 8448 Año de creación de pregunta: 2011
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[45]= new Array();
 choices[45][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[45][1] = "Utiliza una estructura eminentemente procedural";
 choices[45][2] = "Utiliza una estructura eminentemente declarativa";
 choices[45][3] = "Resuelve problemas heur&iacute;sticos";
 answers[45] = 1;
 units[45] = ['68'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8448. ";
 preguntaids[45] = 8448


//  Id pregunta: 7553 Año de creación de pregunta: 2010
 questions[46]= "47)  El protocolo SSL v.3:";
 choices[46]= new Array();
 choices[46][0] = "Trabaja tanto sobre TCP como sobre UDP.";
 choices[46][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits.";
 choices[46][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC.";
 choices[46][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman.";
 answers[46] = 3;
 units[46] = ['119'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 7553. Map 2005";
 preguntaids[46] = 7553


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[47]= "48)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[47][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[47][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[47][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[47] = 1;
 units[47] = ['7'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 1995. ";
 preguntaids[47] = 1995


//  Id pregunta: 10644 Año de creación de pregunta: 2015
 questions[48]= "49)  Seg&uacute;n la Ley 9/2014, la regulaci&oacute;n del procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable corresponde a:";
 choices[48]= new Array();
 choices[48][0] = "CNMC.";
 choices[48][1] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[48][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[48][3] = "Gobierno.";
 answers[48] = 3;
 units[48] = ['121'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 10644. Art&iacute;culo 61";
 preguntaids[48] = 10644


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[49]= "50)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[49]= new Array();
 choices[49][0] = "X.";
 choices[49][1] = "XIX.";
 choices[49][2] = "XV.";
 choices[49][3] = "XIII.";
 answers[49] = 1;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[49] = 147


//  Id pregunta: 3830 Año de creación de pregunta: 2002
 questions[50]= "51)  En programaci&oacute;n orientada a objetos:";
 choices[50]= new Array();
 choices[50][0] = "Los objetos son m&oacute;dulos que contienen s&oacute;lo datos, de cualquier tipo";
 choices[50][1] = "Los objetos son m&oacute;dulos que contienen los datos y las instrucciones u operaciones que manipulan esos datos";
 choices[50][2] = "Los objetos pueden ser tratados como cualquier otro dato mediante un lenguaje procedural";
 choices[50][3] = "No existe una concepci&oacute;n din&aacute;mica del objeto como una entidad que exista en tiempo de ejecuci&oacute;n";
 answers[50] = 1;
 units[50] = ['85'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3830. ";
 preguntaids[50] = 3830


//  Id pregunta: 10856 Año de creación de pregunta: 2015
 questions[51]= "52)  POCO son las siglas de:";
 choices[51]= new Array();
 choices[51][0] = "Plain Old CLR Object";
 choices[51][1] = "Plain Old Class Object";
 choices[51][2] = "Plain Old COM Object";
 choices[51][3] = "Plain Old Connection Object";
 answers[51] = 0;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 10856. ";
 preguntaids[51] = 10856


//  Id pregunta: 1971 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un requisito, que debe figurar en la solicitud de iniciaci&oacute;n de un procedimiento administrativo?";
 choices[52]= new Array();
 choices[52][0] = "Hechos, razones y petici&oacute;n en que se concrete con toda claridad la solicitud.";
 choices[52][1] = "&Oacute;rgano, centro o unidad administrativa a la que se dirige.";
 choices[52][2] = "Domicilio profesional a efectos de notificaciones.";
 choices[52][3] = "Firma del solicitante o acreditaci&oacute;n de la autenticidad de su voluntad expresada por cualquier medio.";
 answers[52] = 2;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 1971. ";
 preguntaids[52] = 1971


//  Id pregunta: 7866 Año de creación de pregunta: 2011
 questions[53]= "54)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[53]= new Array();
 choices[53][0] = "AdvFS";
 choices[53][1] = "MFS";
 choices[53][2] = "JFS2";
 choices[53][3] = "XFS";
 answers[53] = 1;
 units[53] = ['56'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7866. Examen TIC A1 2010";
 preguntaids[53] = 7866


//  Id pregunta: 4604 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Qu&eacute; es el modo en una transmisi&oacute;n por fibra &oacute;ptica?:";
 choices[54]= new Array();
 choices[54][0] = "Es el trayecto de un rayo en una fibra";
 choices[54][1] = "Es el trayecto de todos los haces de una fibra";
 choices[54][2] = "Es la polarizaci&oacute;n que existe en la fibra en cada momento de la transmisi&oacute;n";
 choices[54][3] = "Es el tipo de modulaci&oacute;n digital que se imprime al rayo al introducirlo en la fibra";
 answers[54] = 0;
 units[54] = ['106'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4604. ";
 preguntaids[54] = 4604


//  Id pregunta: 6466 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Qu&eacute; afirmaci&oacute;n sobre los puentes NO es correcta?";
 choices[55]= new Array();
 choices[55][0] = "Da servicio a un n&uacute;mero de ordenadores mayor que el que puede cubrirse con una red local";
 choices[55][1] = "Puede conectar redees heterog&eacute;neas";
 choices[55][2] = "Puede conectar medios f&iacute;sicos distintos";
 choices[55][3] = "Un problema en una subred afecta a toda la red";
 answers[55] = 3;
 units[55] = ['102'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 6466. ";
 preguntaids[55] = 6466


//  Id pregunta: 5662 Año de creación de pregunta: 2007
 questions[56]= "57)  &iquest;C&oacute;mo define la Norma UNE ISO IEC 27002 la seguridad de la informaci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[56][1] = "La preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[56][2] = "La obtenci&oacute;n de la autenticaci&oacute;n y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 choices[56][3] = "La obtenci&oacute;n de la autenticaci&oacute;n y el no repudio y la preservaci&oacute;n de la confidencialidad, la integridad y la disponibilidad";
 answers[56] = 1;
 units[56] = ['119'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5662. ";
 preguntaids[56] = 5662


//  Id pregunta: 9099 Año de creación de pregunta: 2014
 questions[57]= "58)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[57]= new Array();
 choices[57][0] = "48 meses.";
 choices[57][1] = "24 meses.";
 choices[57][2] = "12 meses.";
 choices[57][3] = "6 meses.";
 answers[57] = 2;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 9099. Examen TIC-A1 2013";
 preguntaids[57] = 9099


//  Id pregunta: 10552 Año de creación de pregunta: 2015
 questions[58]= "59)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[58]= new Array();
 choices[58][0] = "Entregar servicios acordados";
 choices[58][1] = "Contratar proveedores TI";
 choices[58][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[58][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[58] = 2;
 units[58] = ['101'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10552. ";
 preguntaids[58] = 10552


//  Id pregunta: 6145 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?:";
 choices[59]= new Array();
 choices[59][0] = "GIMP";
 choices[59][1] = "Jetspeed";
 choices[59][2] = "Konqueror";
 choices[59][3] = "Eclipse";
 answers[59] = 0;
 units[59] = ['66'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6145. Examen TIC A1 MAP 2007";
 preguntaids[59] = 6145


//  Id pregunta: 9998 Año de creación de pregunta: 2015
 questions[60]= "61)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[60]= new Array();
 choices[60][0] = "SQLite.";
 choices[60][1] = "Oracle Pocket.";
 choices[60][2] = "SQL Server compact.";
 choices[60][3] = "MySQL micro edition.";
 answers[60] = 0;
 units[60] = ['60'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 9998. Examen TIC A2 2014";
 preguntaids[60] = 9998


//  Id pregunta: 3164 Año de creación de pregunta: 2002
 questions[61]= "62)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[61]= new Array();
 choices[61][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[61][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[61][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[61][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[61] = 0;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 3164. Ley 34/2002, art&iacute;culo 21";
 preguntaids[61] = 3164


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[62]= "63)  La secci&oacute;n segunda, del cap&iacute;tulo segundo, del t&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola de 1978, se denomina:";
 choices[62]= new Array();
 choices[62][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[62][1] = "De los derechos y deberes fundamentales.";
 choices[62][2] = "De los derechos y libertades de los ciudadanos.";
 choices[62][3] = "De los derechos y deberes de los ciudadanos.";
 answers[62] = 3;
 units[62] = ['1'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 53. Constituci&oacute;n de 1978";
 preguntaids[62] = 53


//  Id pregunta: 8640 Año de creación de pregunta: 2013
 questions[63]= "64)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[63]= new Array();
 choices[63][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[63][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[63][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[63][3] = "Mediante la Ley de Patentes";
 answers[63] = 1;
 units[63] = ['41'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 8640. ";
 preguntaids[63] = 8640


//  Id pregunta: 3899 Año de creación de pregunta: 2002
 questions[64]= "65)  El tesauro es un diccionario din&aacute;mico de descriptores que pasa las relaciones entre sus t&eacute;rminos:";
 choices[64]= new Array();
 choices[64][0] = "En operadores de jerarqu&iacute;a";
 choices[64][1] = "En operaciones asociativos";
 choices[64][2] = "En operadores sem&aacute;nticos y preferenciales";
 choices[64][3] = "Son correctas todas las respuestas anteriores";
 answers[64] = 3;
 units[64] = ['100'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3899. ";
 preguntaids[64] = 3899


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[65]= new Array();
 choices[65][0] = "El Consejo Europeo.";
 choices[65][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[65][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[65][3] = "El Parlamento Europeo.";
 answers[65] = 0;
 units[65] = ['5'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[65] = 133


//  Id pregunta: 2586 Año de creación de pregunta: 2002
 questions[66]= "67)  Seg&uacute;n la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, los contratos celebrados por la v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[66]= new Array();
 choices[66][0] = "El lugar en que est&eacute; establecido el prestador de servicios";
 choices[66][1] = "El lugar que figure en el registro mercantil";
 choices[66][2] = "El lugar en que &eacute;ste tenga su residencia habitual";
 choices[66][3] = "El lugar que figure en la cabecera de la p&aacute;gina";
 answers[66] = 2;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 2586. Ley 34/2002, art&iacute;culo 29";
 preguntaids[66] = 2586


//  Id pregunta: 6900 Año de creación de pregunta: 2010
 questions[67]= "68)  Dado un CAU de tres niveles, &iquest;d&oacute;nde ubicar&iacute;a en el proceso de soporte al personal inform&aacute;tico de un centro perif&eacute;rico?";
 choices[67]= new Array();
 choices[67][0] = "Entre el primer nivel (CAU) y el segundo nivel (otras &aacute;reas del centro TIC)";
 choices[67][1] = "Entre el segundo nivel (otras &aacute;reas del centro TIC) y el tercer nivel (proveedores y empresas de mantenimiento)";
 choices[67][2] = "Como &lsquo;nivel 0&rsquo;, atendiendo todas las incidencias del centro perif&eacute;rico y escal&aacute;ndolas al nivel 1 (CAU)";
 choices[67][3] = "Fuera del proceso de soporte, habr&iacute;a que reubicar al personal en otras tareas";
 answers[67] = 0;
 units[67] = ['30'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 6900. ";
 preguntaids[67] = 6900


//  Id pregunta: 10391 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[68]= new Array();
 choices[68][0] = "2% del PIB";
 choices[68][1] = "3%del PIB";
 choices[68][2] = "5% del PIB";
 choices[68][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[68] = 1;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 10391. ";
 preguntaids[68] = 10391


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[69]= "70)  La Mesa del Parlamento europeo estar&aacute; compuesta por:";
 choices[69]= new Array();
 choices[69][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[69][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[69][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[69][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[69] = 3;
 units[69] = ['5'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 146. Uni&oacute;n Europea";
 preguntaids[69] = 146


//  Id pregunta: 6760 Año de creación de pregunta: 2009
 questions[70]= "71)  &iquest;Cu&aacute;l de estos no es un producto de virtualizaci&oacute;n de VMWare?";
 choices[70]= new Array();
 choices[70][0] = "VMWare Parallels";
 choices[70][1] = "VMWare ESXi";
 choices[70][2] = "VMWare Workstation";
 choices[70][3] = "VMWare Fusion";
 answers[70] = 0;
 units[70] = ['124'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6760. ";
 preguntaids[70] = 6760


//  Id pregunta: 8265 Año de creación de pregunta: 2011
 questions[71]= "72)  En el contexto de la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, un ciudadano es:";
 choices[71]= new Array();
 choices[71][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[71][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[71][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[71][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o incluso, un ente sin personalidad";
 answers[71] = 3;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 8265. Examen TIC A2 2010 interna";
 preguntaids[71] = 8265


//  Id pregunta: 5999 Año de creación de pregunta: 2003
 questions[72]= "73)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[72]= new Array();
 choices[72][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[72][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[72][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[72][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[72] = 0;
 units[72] = ['56'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 5999. TIC B 2007";
 preguntaids[72] = 5999


//  Id pregunta: 6728 Año de creación de pregunta: 2009
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[73]= new Array();
 choices[73][0] = "JSTL";
 choices[73][1] = "JavaScript";
 choices[73][2] = "JNDI";
 choices[73][3] = "JavaCard";
 answers[73] = 1;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6728. ";
 preguntaids[73] = 6728


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[74]= "75)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[74]= new Array();
 choices[74][0] = "El derecho a la propiedad privada.";
 choices[74][1] = "El derecho de asociaci&oacute;n.";
 choices[74][2] = "El derecho de fundaci&oacute;n.";
 choices[74][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[74] = 1;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[74] = 2


