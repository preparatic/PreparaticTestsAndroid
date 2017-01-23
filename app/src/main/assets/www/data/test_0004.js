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
//  Id pregunta: 8711 Año de creación de pregunta: 2013
 questions[0]= "1)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[0]= new Array();
 choices[0][0] = "Kubuntu.";
 choices[0][1] = "Red Hat";
 choices[0][2] = "Slackware.";
 choices[0][3] = "IRIX.";
 answers[0] = 3;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8711. Examen TICA2-2011";
 preguntaids[0] = 8711


//  Id pregunta: 5735 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Cu&aacute;les de los siguientes diagramas dan una perspectiva est&aacute;tica de un sistema?";
 choices[1]= new Array();
 choices[1][0] = "Diagrama de clases, diagrama de componentes y diagramas de colaboraciones.";
 choices[1][1] = "Diagramas de clase, diagramas de componentes y diagramas de distribuci&oacute;n.";
 choices[1][2] = "Diagramas de clases, de herencia, de encapsulaci&oacute;n y de polimorfismo.";
 choices[1][3] = "Diagramas de secuencias y diagramas de componentes.";
 answers[1] = 1;
 units[1] = ['89'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5735. ";
 preguntaids[1] = 5735


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[2]= "3)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[2]= new Array();
 choices[2][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[2][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[2][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[2][3] = "todas son correctas";
 answers[2] = 3;
 units[2] = ['7'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 230. Ley 39/2015";
 preguntaids[2] = 230


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[3]= "4)  El m&eacute;todo utilizado en el mantenimiento de software consistente en el examen y modificaci&oacute;n de un sistema para reconstruirlo de una nueva forma es:";
 choices[3]= new Array();
 choices[3][0] = "Ingenier&iacute;a inversa.";
 choices[3][1] = "Reestructuraci&oacute;n software.";
 choices[3][2] = "Reingenier&iacute;a.";
 choices[3][3] = "Transformaci&oacute;n de programas.";
 answers[3] = 2;
 units[3] = ['97'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 855. AGE A2 2015";
 preguntaids[3] = 855


//  Id pregunta: 2983 Año de creación de pregunta: 2002
 questions[4]= "5)  Los programas fuente Java:";
 choices[4]= new Array();
 choices[4][0] = "Se compilan siempre";
 choices[4][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[4][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[4][3] = "Hay partes compiladas y partes interpretadas";
 answers[4] = 0;
 units[4] = ['64', '65'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2983. Siempre se compilan a Bytecode.";
 preguntaids[4] = 2983


//  Id pregunta: 7570 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema a otro usuario?";
 choices[5]= new Array();
 choices[5][0] = "CONNECT y RESOURCE.";
 choices[5][1] = "DBA.";
 choices[5][2] = "GRANT ANY ROLE.";
 choices[5][3] = "SELECT ANY TABLE.";
 answers[5] = 2;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7570. Map 2006";
 preguntaids[5] = 7570


//  Id pregunta: 4830 Año de creación de pregunta: 2002
 questions[6]= "7)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[6]= new Array();
 choices[6][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[6][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[6][2] = "Z especifica la disciplina de cola.";
 choices[6][3] = "Todas las anteriores son v&aacute;lidas.";
 answers[6] = 3;
 units[6] = ['56'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 4830. ";
 preguntaids[6] = 4830


//  Id pregunta: 6363 Año de creación de pregunta: 2003
 questions[7]= "8)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[7]= new Array();
 choices[7][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[7][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[7][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[7][3] = "La citada ley no hace referencia a tal concepto";
 answers[7] = 2;
 units[7] = ['36'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 6363. Examen 2006 JCYL";
 preguntaids[7] = 6363


//  Id pregunta: 7156 Año de creación de pregunta: 2010
 questions[8]= "9)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[8]= new Array();
 choices[8][0] = "Empleados, departamentos y empresa.";
 choices[8][1] = "Empresa, proyectos, empleados y departamentos.";
 choices[8][2] = "Empleados, proyectos y departamentos.";
 choices[8][3] = "Empleados y departamentos.";
 answers[8] = 2;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7156. ";
 preguntaids[8] = 7156


//  Id pregunta: 7129 Año de creación de pregunta: 2010
 questions[9]= "10)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[9]= new Array();
 choices[9][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[9][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[9][2] = "Proyecto Aporta";
 choices[9][3] = "Proyecto Comparte";
 answers[9] = 0;
 units[9] = ['7'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 7129. ";
 preguntaids[9] = 7129


//  Id pregunta: 6735 Año de creación de pregunta: 2009
 questions[10]= "11)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[10]= new Array();
 choices[10][0] = "Puntuaciones normalizadas";
 choices[10][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[10][2] = "Coeficiente de concordancia";
 choices[10][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[10] = 2;
 units[10] = ['38'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 6735. MAP 2008 A1";
 preguntaids[10] = 6735


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[11]= "12)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[11]= new Array();
 choices[11][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[11][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[11][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[11][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[11] = 2;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[11] = 160


//  Id pregunta: 10831 Año de creación de pregunta: 2015
 questions[12]= "13)  En el modelo EFQM, de los siguientes criterios, el que tiene un mayor peso en la puntuaci&oacute;n es:";
 choices[12]= new Array();
 choices[12][0] = "Resultados en los clientes";
 choices[12][1] = "Resultados en la sociedad";
 choices[12][2] = "Resultados en las personas";
 choices[12][3] = "Todos tienen el mismo peso";
 answers[12] = 0;
 units[12] = ['98'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10831. ";
 preguntaids[12] = 10831


//  Id pregunta: 9091 Año de creación de pregunta: 2014
 questions[13]= "14)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[13]= new Array();
 choices[13][0] = "A, B, C, D.";
 choices[13][1] = "E, F, G, H.";
 choices[13][2] = "S, T, U, V.";
 choices[13][3] = "W, X, Y, Z.";
 answers[13] = 2;
 units[13] = ['114'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 9091. Examen TIC-A1 2013";
 preguntaids[13] = 9091


//  Id pregunta: 6455 Año de creación de pregunta: 2003
 questions[14]= "15)  Los documentos ATAG:";
 choices[14]= new Array();
 choices[14][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[14][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[14][2] = "Est&aacute;n pensados para el contenido web.";
 choices[14][3] = "Todas las anteriores son correctas.";
 answers[14] = 0;
 units[14] = ['42'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 6455. ";
 preguntaids[14] = 6455


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[15]= "16)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "Jurados de concursos";
 choices[15][1] = "Mesas de contrataci&oacute;n";
 choices[15][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[15][3] = "Ninguno de los anteriores";
 answers[15] = 2;
 units[15] = ['10'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[15] = 9035


//  Id pregunta: 6299 Año de creación de pregunta: 2003
 questions[16]= "17)  Se&ntilde;ale la opci&oacute;n incorrecta en relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[16]= new Array();
 choices[16][0] = "Entre las ventajas del DSBC no se encuentra la reducci&oacute;n de tiempos y costes de desarrollo";
 choices[16][1] = "Su enfoque consiste en configurar y especializar componentes de software ya existentes.";
 choices[16][2] = "Estos componentes son los conocidos COTS (Commercial off-the-self)";
 choices[16][3] = "Los productos COTS presentan problemas espec&iacute;ficos como incompatibilidad,falta de fuentes, cambio de versiones o esfuerzo de aprendizaje";
 answers[16] = 0;
 units[16] = ['82'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 6299. ";
 preguntaids[16] = 6299


//  Id pregunta: 5208 Año de creación de pregunta: 2006
 questions[17]= "18)  Un router puede ser:";
 choices[17]= new Array();
 choices[17][0] = "S&oacute;lo un dispositivo hardware.";
 choices[17][1] = "S&oacute;lo un dispositivo software.";
 choices[17][2] = "Un dispositivo software, hardware o bien una combinaci&oacute;n de ellos.";
 choices[17][3] = "Ninguna de las anteriores es cierta";
 answers[17] = 2;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5208. ";
 preguntaids[17] = 5208


//  Id pregunta: 8937 Año de creación de pregunta: 2013
 questions[18]= "19)  El cliente web:";
 choices[18]= new Array();
 choices[18][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[18][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[18][2] = "Puede tener plugins instalados";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = 3;
 units[18] = ['62'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8937. ";
 preguntaids[18] = 8937


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;les de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?";
 choices[19]= new Array();
 choices[19][0] = "De m&eacute;todos y de funciones.";
 choices[19][1] = "De bloque y de flujo.";
 choices[19][2] = "De ocultamiento y de resumen.";
 choices[19][3] = "De funciones y de flujo.";
 answers[19] = 1;
 units[19] = ['76'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 777. AGE A2 2015";
 preguntaids[19] = 777


//  Id pregunta: 1740 Año de creación de pregunta: 2016
 questions[20]= "21)  Se cuenta con 4 discos f&iacute;sicos que se desea configurar como una &uacute;nica unidad, por ejemplo /root. Se desea maximizar la capacidad &uacute;til de almacenamiento proporcionando alg&uacute;n mecanismo de redundancia ante fallos. Por favor, elija entre las siguientes la mejor opci&oacute;n a utilizar:";
 choices[20]= new Array();
 choices[20][0] = "RAID 0";
 choices[20][1] = "RAID 1";
 choices[20][2] = "RAID 0+1";
 choices[20][3] = "RAID 5";
 answers[20] = 3;
 units[20] = ['53'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 1740. ";
 preguntaids[20] = 1740


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[21]= "22)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[21]= new Array();
 choices[21][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[21][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[21][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[21][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[21] = 1;
 units[21] = ['5'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 136. Uni&oacute;n Europea";
 preguntaids[21] = 136


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[22]= new Array();
 choices[22][0] = "Veinticinco.";
 choices[22][1] = "Veintiuno.";
 choices[22][2] = "Dieciocho.";
 choices[22][3] = "Diecinueve.";
 answers[22] = 0;
 units[22] = ['5'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 145. Uni&oacute;n Europea";
 preguntaids[22] = 145


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[23]= new Array();
 choices[23][0] = "El Tratado de Lisboa";
 choices[23][1] = "El Tratado de Amsterdam";
 choices[23][2] = "El Tratado de Niza";
 choices[23][3] = "El Acta &Uacute;nica Europea";
 answers[23] = 1;
 units[23] = ['15'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[23] = 420


//  Id pregunta: 4105 Año de creación de pregunta: 2003
 questions[24]= "25)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[24]= new Array();
 choices[24][0] = "Nivel fon&eacute;tico distintivo.";
 choices[24][1] = "Nivel pros&oacute;dico.";
 choices[24][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[24][3] = "Nivel ac&uacute;stico.";
 answers[24] = 2;
 units[24] = ['81'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 4105. ";
 preguntaids[24] = 4105


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[25]= "26)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Muy grave";
 choices[25][1] = "Grave";
 choices[25][2] = "Leve";
 choices[25][3] = "No est&aacute; tipificado tal importe";
 answers[25] = 1;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[25] = 6167


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[26]= "27)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[26]= new Array();
 choices[26][0] = "Firma electr&oacute;nica avanzada";
 choices[26][1] = "Firma electr&oacute;nica reconocida";
 choices[26][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[26] = 2483


//  Id pregunta: 2291 Año de creación de pregunta: 2002
 questions[27]= "28)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[27][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[27][2] = "Obra colectiva: aquella resultado unitario de la colaboraci&oacute;n de varios autores y los derechos corresponden a todos ellos.";
 choices[27][3] = "Todas son falsas";
 answers[27] = 0;
 units[27] = ['41'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2291. B: deber&iacute;a ser &quot;con la colaboraci&oacute;n&quot;; C: la definici&oacute;n corresponde con &quot;obra en colaboraci&oacute;n&quot;";
 preguntaids[27] = 2291


//  Id pregunta: 894 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; t&eacute;rmino NO aparece el RFC 3775 'Mobility Support in IPv6'?";
 choices[28]= new Array();
 choices[28][0] = "Correspondent node.";
 choices[28][1] = "L3 handover.";
 choices[28][2] = "Home agent.";
 choices[28][3] = "Care-of registration.";
 answers[28] = 3;
 units[28] = ['109'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 894. AGE A2 2015";
 preguntaids[28] = 894


//  Id pregunta: 3671 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes modelos de an&aacute;lisis estructurado sirve para verificar la exactitud de los otros dos modelos y para garantizar la coherencia entre las tres visiones del sistema: est&aacute;tica, din&aacute;mica y evolutiva?:";
 choices[29]= new Array();
 choices[29][0] = "DFD";
 choices[29][1] = "DED";
 choices[29][2] = "HVE";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = 2;
 units[29] = ['85', '86'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3671. ";
 preguntaids[29] = 3671


//  Id pregunta: 2001 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[30]= new Array();
 choices[30][0] = "Decisi&oacute;n 87-95-CEE";
 choices[30][1] = "Decreto 88-91-CEE";
 choices[30][2] = "Decreto 88-90-CEE";
 choices[30][3] = "Decisi&oacute;n 91-88-CEE";
 answers[30] = 0;
 units[30] = ['43'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2001. ";
 preguntaids[30] = 2001


//  Id pregunta: 9319 Año de creación de pregunta: 2014
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[31]= new Array();
 choices[31][0] = "Pago mediante cargo en cuenta";
 choices[31][1] = "Pago con tarjeta";
 choices[31][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[31][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[31] = 3;
 units[31] = ['10'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 9319. ";
 preguntaids[31] = 9319


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[32]= new Array();
 choices[32][0] = "El 2 de Octubre de 2015";
 choices[32][1] = "El 15 de Septiembre de 2015";
 choices[32][2] = "El 1 de Octubre de 2015";
 choices[32][3] = "El 5 de Octubre de 2015";
 answers[32] = 0;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 455. Estrategia TIC";
 preguntaids[32] = 455


//  Id pregunta: 2761 Año de creación de pregunta: 2002
 questions[33]= "34)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[33]= new Array();
 choices[33][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[33][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[33][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[33][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[33] = 2;
 units[33] = ['74'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2761. ";
 preguntaids[33] = 2761


//  Id pregunta: 1792 Año de creación de pregunta: 2016
 questions[34]= "35)  Un ejemplo de servicio de interoperabilidad es el Servicio de Verificaci&oacute;n de Identidad. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[34]= new Array();
 choices[34][0] = "Permite la verificaci&oacute;n de los datos de identidad de un ciudadano sin que &eacute;ste presente la fotocopia del documento de identidad para aportar al expediente.";
 choices[34][1] = "Se puede utilizar siempre que el ciudadano preste su consentimiento para ello.";
 choices[34][2] = "Es una informaci&oacute;n facilitada por la Direcci&oacute;n General de la Polic&iacute;a a trav&eacute;s de la Plataforma de intermediaci&oacute;n de la Administraci&oacute;n General del Estado.";
 choices[34][3] = "Se puede utilizar en cualquier momento de la tramitaci&oacute;n de un expediente administrativo, y por ser utilizado por una administraci&oacute;n p&uacute;blica no requiere consentimiento expreso del ciudadano.";
 answers[34] = 3;
 units[34] = ['43'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 1792. ";
 preguntaids[34] = 1792


//  Id pregunta: 5307 Año de creación de pregunta: 2006
 questions[35]= "36)  Wikipedia es:";
 choices[35]= new Array();
 choices[35][0] = "Un diccionario de pago.";
 choices[35][1] = "Un diccionario libre con licencia GFDL.";
 choices[35][2] = "Una enciclopedia de pago publicada en varios idiomas.";
 choices[35][3] = "Una enciclopedia libre escrita por voluntarios.";
 answers[35] = 3;
 units[35] = ['103'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5307. ";
 preguntaids[35] = 5307


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[36]= "37)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[36]= new Array();
 choices[36][0] = "Personas jur&iacute;dicas.";
 choices[36][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[36][2] = "Notarios y registradores.";
 choices[36][3] = "Todas las anteriores.";
 answers[36] = 3;
 units[36] = ['7', '19'];
 blocks[36] = ['A2', 'A4'];
 comments[36] = "Id Pregunta: 9887. ";
 preguntaids[36] = 9887


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[37]= new Array();
 choices[37][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[37][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[37][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[37][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[37] = 0;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 444. Agenda Digital";
 preguntaids[37] = 444


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[38]= "39)  Sobre el Plan Juncker:";
 choices[38]= new Array();
 choices[38][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[38][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[38][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[38][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[38] = 1;
 units[38] = ['5'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 104. Uni&oacute;n Europea";
 preguntaids[38] = 104


//  Id pregunta: 1289 Año de creación de pregunta: 2016
 questions[39]= "40)  EI certificado de sede electr&oacute;nica, seg&uacute;n se establece en el Real Decreto 1671/2009:";
 choices[39]= new Array();
 choices[39][0] = "Identifica la sede y permite la firma electr&oacute;nica de documentos y tramites.";
 choices[39][1] = "Identifica la sede y permite a firma electr&oacute;nica de documentos.";
 choices[39][2] = "Identifica la sede, quedando excluida su aplicaci&oacute;n para la firma electr&oacute;nica de documentos y tramites,";
 choices[39][3] = "Identifica la sede y permite la firma electr&oacute;nica de tr&aacute;mites.";
 answers[39] = 2;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 1289. ";
 preguntaids[39] = 1289


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[40]= new Array();
 choices[40][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[40][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[40][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[40][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[40] = 1;
 units[40] = ['97'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1827. ";
 preguntaids[40] = 1827


//  Id pregunta: 3457 Año de creación de pregunta: 2006
 questions[41]= "42)  Se&ntilde;ale la correcta:";
 choices[41]= new Array();
 choices[41][0] = "3DES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[41][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios.";
 choices[41][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[41][3] = "Todas las anteriores";
 answers[41] = 1;
 units[41] = ['76'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3457. ";
 preguntaids[41] = 3457


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[42]= "43)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[42]= new Array();
 choices[42][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[42][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[42][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[42][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[42] = 3;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[42] = 2514


//  Id pregunta: 10969 Año de creación de pregunta: 2015
 questions[43]= "44)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[43]= new Array();
 choices[43][0] = "El Portal de la Transparencia depende del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[43][1] = "La solicitud de acceso a la informaci&oacute;n no requerir&aacute; la identificaci&oacute;n del solicitante.";
 choices[43][2] = "No se admitir&aacute;n solicitudes de informaci&oacute;n para cuya divulgaci&oacute;n sea necesaria una acci&oacute;n previa de reelaboraci&oacute;n.";
 choices[43][3] = "La resoluci&oacute;n de la petici&oacute;n de acceso deber&aacute; notificarse al solicitante en el plazo m&aacute;ximo de 15 d&iacute;as h&aacute;biles.";
 answers[43] = 2;
 units[43] = ['22'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 10969. ";
 preguntaids[43] = 10969


//  Id pregunta: 10400 Año de creación de pregunta: 2015
 questions[44]= "45)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[44]= new Array();
 choices[44][0] = "0.5";
 choices[44][1] = "0.8";
 choices[44][2] = "0.9";
 choices[44][3] = "1";
 answers[44] = 0;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 10400. ";
 preguntaids[44] = 10400


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[45]= "46)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[45]= new Array();
 choices[45][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[45][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[45][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[45][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[45] = 0;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 614. Xunta de Galicia 2015";
 preguntaids[45] = 614


//  Id pregunta: 4523 Año de creación de pregunta: 2002
 questions[46]= "47)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[46]= new Array();
 choices[46][0] = "Nivel de red";
 choices[46][1] = "Nivel de transporte";
 choices[46][2] = "Nivel de sesi&oacute;n";
 choices[46][3] = "Nivel de presentaci&oacute;n";
 answers[46] = 3;
 units[46] = ['105'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4523. ";
 preguntaids[46] = 4523


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[47]= new Array();
 choices[47][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[47][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[47][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[47][3] = "todas son correctas";
 answers[47] = 1;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[47] = 974


//  Id pregunta: 7984 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[48]= new Array();
 choices[48][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[48][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[48][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[48][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[48] = 3;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 7984. Examen TIC A2 2010";
 preguntaids[48] = 7984


//  Id pregunta: 8794 Año de creación de pregunta: 2013
 questions[49]= "50)  La red S-TESTA:";
 choices[49]= new Array();
 choices[49][0] = "Es accesible directamente desde cada Ministerio.";
 choices[49][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[49][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[49][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[49] = 2;
 units[49] = ['114'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8794. ";
 preguntaids[49] = 8794


//  Id pregunta: 8174 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[50]= new Array();
 choices[50][0] = "SOLAP.";
 choices[50][1] = "DOLAP.";
 choices[50][2] = "WOLAP.";
 choices[50][3] = "RTOLAP.";
 answers[50] = 2;
 units[50] = ['72'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8174. Examen TIC A2 2010 interna";
 preguntaids[50] = 8174


//  Id pregunta: 5839 Año de creación de pregunta: 2007
 questions[51]= "52)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[51]= new Array();
 choices[51][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[51][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[51][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[51][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[51] = 2;
 units[51] = ['43'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 5839. Examen 2006 JCYL";
 preguntaids[51] = 5839


//  Id pregunta: 4752 Año de creación de pregunta: 2002
 questions[52]= "53)  El protocolo TCP (Protocolo de Control de Transmisi&oacute;n) es un protocolo a nivel de transporte orientado a conexi&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Que fue desarrollado expresamente para Internet";
 choices[52][1] = "Que, al igual que el protocolo IP (Protocolo Interredes), son protocolos OSI (Interconexi&oacute;n de Sistemas Abiertos)";
 choices[52][2] = "Que no puede interoperar con protocolos de transporte OSI";
 choices[52][3] = "Que fue dise&ntilde;ado para garantizar la fiabilidad que no ofrece el protocolo IP para establecer comunicaciones fiables entre subredes de datos";
 answers[52] = 3;
 units[52] = ['109'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4752. ";
 preguntaids[52] = 4752


//  Id pregunta: 8537 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[53]= new Array();
 choices[53][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[53][1] = "El impedimento o la obstaculizaci&oacute;n de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[53][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[53][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[53] = 2;
 units[53] = ['35'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 8537. ";
 preguntaids[53] = 8537


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[54]= "55)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[54]= new Array();
 choices[54][0] = "El Rey.";
 choices[54][1] = "El Jefe del Estado.";
 choices[54][2] = "El Gobierno.";
 choices[54][3] = "El Presidente del Gobierno.";
 answers[54] = 2;
 units[54] = ['1'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 35. Constituci&oacute;n de 1978";
 preguntaids[54] = 35


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[55][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[55][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[55][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[55] = 2;
 units[55] = ['22'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 505. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[55] = 505


//  Id pregunta: 2242 Año de creación de pregunta: 2002
 questions[56]= "57)  La primera fase a la hora de seleccionar un paquete o aplicaci&oacute;n est&aacute;ndar es:";
 choices[56]= new Array();
 choices[56][0] = "Llevar a cabo una investigaci&oacute;n preliminar";
 choices[56][1] = "Entrar en contacto con los suministradores";
 choices[56][2] = "Definir los requisitos del usuario";
 choices[56][3] = "Personalizar e implantar el paquete";
 answers[56] = 2;
 units[56] = ['43'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2242. ";
 preguntaids[56] = 2242


//  Id pregunta: 1127 Año de creación de pregunta: 2016
 questions[57]= "58)  De entre los siguientes, &iquest;qui&eacute;n es el creador del lenguaje de programaci&oacute;n C?";
 choices[57]= new Array();
 choices[57][0] = "Linus Torvalds.";
 choices[57][1] = "Dennis Ritchie.";
 choices[57][2] = "Richard Stallman.";
 choices[57][3] = "Bill Gates.";
 answers[57] = 1;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1127. ";
 preguntaids[57] = 1127


//  Id pregunta: 7883 Año de creación de pregunta: 2011
 questions[58]= "59)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[58]= new Array();
 choices[58][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[58][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[58][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[58][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[58] = 1;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7883. Examen TIC A1 2010";
 preguntaids[58] = 7883


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[59]= "60)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[59]= new Array();
 choices[59][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[59][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[59][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[59][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[59] = 2;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 242. Ley 39/2015";
 preguntaids[59] = 242


//  Id pregunta: 7960 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz?";
 choices[60]= new Array();
 choices[60][0] = "G.711.";
 choices[60][1] = "G.726.";
 choices[60][2] = "G.728.";
 choices[60][3] = "G.729.";
 answers[60] = 1;
 units[60] = ['122'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 7960. Examen TIC A2 2010";
 preguntaids[60] = 7960


//  Id pregunta: 10737 Año de creación de pregunta: 2015
 questions[61]= "62)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[61][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[61][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[61][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[61] = 3;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 10737. ";
 preguntaids[61] = 10737


//  Id pregunta: 10498 Año de creación de pregunta: 2015
 questions[62]= "63)  Seg&uacute;n se define en M&eacute;trica, la t&eacute;cnica de reglas de transformaci&oacute;n, permite transformar cada elemento del modelo de clases en un elemento del modelo f&iacute;sico. Se&ntilde;ale de los indicados a continuaci&oacute;n cu&aacute;l no es una regla de transformaci&oacute;n contemplada";
 choices[62]= new Array();
 choices[62][0] = "Transformaci&oacute;n de clases";
 choices[62][1] = "Transformaci&oacute;n de atributos de clases";
 choices[62][2] = "Transformaci&oacute;n de relaciones inclusivas";
 choices[62][3] = "Transformaci&oacute;n de la herencia";
 answers[62] = 2;
 units[62] = ['91'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 10498. No existe. S&iacute; existe la transformaci&oacute;n de relaciones exclusivas.";
 preguntaids[62] = 10498


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[63]= new Array();
 choices[63][0] = "Anualmente por el Consejo de Ministros";
 choices[63][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[63][2] = "Al final de cada legislatura por el Gobierno";
 choices[63][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[63] = 0;
 units[63] = ['14'];
 blocks[63] = ['A3'];
 comments[63] = "Id Pregunta: 367. Pol&iacute;ticas de igualdad";
 preguntaids[63] = 367


//  Id pregunta: 7480 Año de creación de pregunta: 2010
 questions[64]= "65)  El entorno de escritorio KDE:";
 choices[64]= new Array();
 choices[64][0] = "Utiliza como gestor de ventanas uno propio.";
 choices[64][1] = "No posee gestor de ventanas propio.";
 choices[64][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA.";
 choices[64][3] = "No proporciona distintas configuraciones para distintos idiomas.";
 answers[64] = 0;
 units[64] = ['62'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7480. Map 2005";
 preguntaids[64] = 7480


//  Id pregunta: 3035 Año de creación de pregunta: 2002
 questions[65]= "66)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[65]= new Array();
 choices[65][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[65][1] = "Es la estructura de un sistema con multiprocesador";
 choices[65][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[65][3] = "No se corresponde con nada de lo anterior";
 answers[65] = 2;
 units[65] = ['49'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 3035. ";
 preguntaids[65] = 3035


//  Id pregunta: 7734 Año de creación de pregunta: 2010
 questions[66]= "67)  En Java 2, el operador &gt;&gt;:";
 choices[66]= new Array();
 choices[66][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas.";
 choices[66][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo).";
 choices[66][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo).";
 choices[66][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos.";
 answers[66] = 2;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7734. ";
 preguntaids[66] = 7734


//  Id pregunta: 3415 Año de creación de pregunta: 2006
 questions[67]= "68)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[67]= new Array();
 choices[67][0] = "if-needed; if-required e if-deleted";
 choices[67][1] = "if-needed; if-required e if-added";
 choices[67][2] = "if-needed; if-deleted e if-added";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = 3;
 units[67] = ['68'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3415. ";
 preguntaids[67] = 3415


//  Id pregunta: 3665 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[68]= new Array();
 choices[68][0] = "Activa procesos";
 choices[68][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[68][2] = "El flujo no puede crear ni destruir datos";
 choices[68][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[68] = 0;
 units[68] = ['86'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3665. ";
 preguntaids[68] = 3665


//  Id pregunta: 1550 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un m&eacute;todo del objeto XMLHttpRequest de Javascript? Para la respuesta no tenga en cuenta los posibles par&aacute;metros que pueda contener la llamada al mismo.";
 choices[69]= new Array();
 choices[69][0] = "open";
 choices[69][1] = "stop";
 choices[69][2] = "setRequestHeader";
 choices[69][3] = "getAllResponseHeaders";
 answers[69] = 1;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1550. ";
 preguntaids[69] = 1550


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[70]= "71)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[70]= new Array();
 choices[70][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[70][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[70][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[70][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[70] = 0;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[70] = 68


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[71]= "72)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[71]= new Array();
 choices[71][0] = "Cuatro millones de euros.";
 choices[71][1] = "Seis millones de euros.";
 choices[71][2] = "Siete millones de euros.";
 choices[71][3] = "Cinco millones de euros.";
 answers[71] = 1;
 units[71] = ['11'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 299. Presupuestos generales";
 preguntaids[71] = 299


//  Id pregunta: 6955 Año de creación de pregunta: 2010
 questions[72]= "73)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[72]= new Array();
 choices[72][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[72][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[72][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[72][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n de bucles iterativos, probar el producto, reajustar especificacones";
 answers[72] = 0;
 units[72] = ['82'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 6955. TIC-B 2009 bloque desarrollo";
 preguntaids[72] = 6955


//  Id pregunta: 6277 Año de creación de pregunta: 2007
 questions[73]= "74)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[73]= new Array();
 choices[73][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[73][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[73][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[73][3] = "Especificaciones de Implantaci&oacute;n";
 answers[73] = 2;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 6277. ";
 preguntaids[73] = 6277


//  Id pregunta: 7224 Año de creación de pregunta: 2010
 questions[74]= "75)  GNOME es el acr&oacute;nimo de:";
 choices[74]= new Array();
 choices[74][0] = "GNU Network Object Model Environment";
 choices[74][1] = "General Network Object Model Environment";
 choices[74][2] = "GIMP Network Object Model Environment";
 choices[74][3] = "GNOME Network Object Model Environment";
 answers[74] = 0;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7224. ";
 preguntaids[74] = 7224


