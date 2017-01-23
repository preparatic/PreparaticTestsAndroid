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
//  Id pregunta: 10499 Año de creación de pregunta: 2015
 questions[0]= "1)  Cu&aacute;l de las siguientes es una caracter&iacute;stca de SIP";
 choices[0]= new Array();
 choices[0][0] = "M&aacute;s cercano a http y datos";
 choices[0][1] = "Est&aacute;ndar de la ITU-T";
 choices[0][2] = "Las tareas de se&ntilde;alizaci&oacute;n dependen de un servidor central, con terminales &quot;tontos&quot; en los extremos.";
 choices[0][3] = "Presentado como evoluci&oacute;n de SS7, dise&ntilde;ado para el control de la se&ntilde;alizaci&oacute;n en redes de conmutaci&oacute;n de circuitos.";
 answers[0] = 0;
 units[0] = ['114'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 10499. Es un est&aacute;ndar de IETF.";
 preguntaids[0] = 10499


//  Id pregunta: 8295 Año de creación de pregunta: 2011
 questions[1]= "2)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[1]= new Array();
 choices[1][0] = "53 TCP";
 choices[1][1] = "453 TCP";
 choices[1][2] = "456 UDP";
 choices[1][3] = "53 UDP";
 answers[1] = 0;
 units[1] = ['103'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 8295. Examen UPM A2 2011";
 preguntaids[1] = 8295


//  Id pregunta: 8896 Año de creación de pregunta: 2013
 questions[2]= "3)  En UML, NO es un diagrama din&aacute;mico:";
 choices[2]= new Array();
 choices[2][0] = "Diagrama de secuencia.";
 choices[2][1] = "Diagrama de estado.";
 choices[2][2] = "Diagrama de despliegue.";
 choices[2][3] = "Diagrama de colaboraci&oacute;n.";
 answers[2] = 2;
 units[2] = ['85'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 8896. Examen AGE TIC A1 2011";
 preguntaids[2] = 8896


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[3]= "4)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[3]= new Array();
 choices[3][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[3][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[3][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[3][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[3] = 1;
 units[3] = ['48'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[3] = 640


//  Id pregunta: 2160 Año de creación de pregunta: 2002
 questions[4]= "5)  En la metodolog&iacute;a MAGERIT, la actividad &quot;Interpretaci&oacute;n del Riesgo&quot; corresponde a la etapa de:";
 choices[4]= new Array();
 choices[4][0] = "Planificaci&oacute;n";
 choices[4][1] = "An&aacute;lisis de riesgos";
 choices[4][2] = "Gesti&oacute;n de riesgos";
 choices[4][3] = "Selecci&oacute;n de salvaguardas";
 answers[4] = 2;
 units[4] = ['45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2160. ";
 preguntaids[4] = 2160


//  Id pregunta: 5089 Año de creación de pregunta: 2002
 questions[5]= "6)  WTLS:";
 choices[5]= new Array();
 choices[5][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[5][1] = "proporciona mayor seguridad que TLS";
 choices[5][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[5][3] = "ningunas de las anteriores";
 answers[5] = 0;
 units[5] = ['120'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 5089. ";
 preguntaids[5] = 5089


//  Id pregunta: 4763 Año de creación de pregunta: 2002
 questions[6]= "7)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[6]= new Array();
 choices[6][0] = "Shannon";
 choices[6][1] = "Oppenheim";
 choices[6][2] = "Shafer";
 choices[6][3] = "Nyquist";
 answers[6] = 3;
 units[6] = ['104'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4763. ";
 preguntaids[6] = 4763


//  Id pregunta: 9618 Año de creación de pregunta: 2014
 questions[7]= "8)  En relaci&oacute;n con las tecnolog&iacute;as de gesti&oacute;n de derechos digitales, se&ntilde;ale la respuesta incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "El sistema DRM creado por Apple recibe el nombre de FairPlay";
 choices[7][1] = "El sistema DRM creado por Microsoft recibe el nombre de Windows Media DRM";
 choices[7][2] = "El sistema DRM creado por Sony recibe el nombre de OpenMG";
 choices[7][3] = "El sistema DRM creado por RealNetworks es PlayReady";
 answers[7] = 3;
 units[7] = ['41'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 9618. El esquema DRM desarrollado por RealNetworks es Helix DRM, aunque Helix ya no est&aacute; suportado por RealNetworks";
 preguntaids[7] = 9618


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[8]= new Array();
 choices[8][0] = "10 d&iacute;as.";
 choices[8][1] = "15 d&iacute;as.";
 choices[8][2] = "1 mes.";
 choices[8][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[8] = 0;
 units[8] = ['7'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[8] = 207


//  Id pregunta: 10392 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[9]= new Array();
 choices[9][0] = "0.05";
 choices[9][1] = "0.01";
 choices[9][2] = "0.1";
 choices[9][3] = "0.2";
 answers[9] = 2;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 10392. ";
 preguntaids[9] = 10392


//  Id pregunta: 10441 Año de creación de pregunta: 2015
 questions[10]= "11)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[10]= new Array();
 choices[10][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[10][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[10][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[10][3] = "Ninguna es correcta.";
 answers[10] = 2;
 units[10] = ['37'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10441. ";
 preguntaids[10] = 10441


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[11]= new Array();
 choices[11][0] = "Un programa presupuestario.";
 choices[11][1] = "Un concepto presupuestario.";
 choices[11][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[11][3] = "Un cr&eacute;dito presupuestario.";
 answers[11] = 0;
 units[11] = ['11'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 309. Presupuestos generales";
 preguntaids[11] = 309


//  Id pregunta: 6447 Año de creación de pregunta: 2003
 questions[12]= "13)  En la recuperaci&oacute;n de la informaci&oacute;n, los modelos cl&aacute;sicos basados en aproximaciones estad&iacute;sticas son";
 choices[12]= new Array();
 choices[12][0] = "Booleano";
 choices[12][1] = "Vectorial";
 choices[12][2] = "Probabil&iacute;stico";
 choices[12][3] = "Todos los anteriores son modelos cl&aacute;sicos";
 answers[12] = 3;
 units[12] = ['100'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 6447. ";
 preguntaids[12] = 6447


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[13]= "14)  La soberan&iacute;a nacional reside en:";
 choices[13]= new Array();
 choices[13][0] = "el Parlamento nacional.";
 choices[13][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[13][2] = "el pueblo espa&ntilde;ol.";
 choices[13][3] = "el Congreso y el Senado.";
 answers[13] = 2;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[13] = 82


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[14]= "15)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[14]= new Array();
 choices[14][0] = "T&iacute;tulo I";
 choices[14][1] = "T&iacute;tulo II";
 choices[14][2] = "T&iacute;tulo III";
 choices[14][3] = "T&iacute;tulo IV";
 answers[14] = 1;
 units[14] = ['7', '19'];
 blocks[14] = ['A2', 'A4'];
 comments[14] = "Id Pregunta: 9889. ";
 preguntaids[14] = 9889


//  Id pregunta: 1987 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una de las premisas que tiene que lograr un Sistema Operativo para ejecutar correctamente las secciones cr&iacute;ticas de sus procesos:";
 choices[15]= new Array();
 choices[15][0] = "Exclusi&oacute;n mutua";
 choices[15][1] = "Progreso";
 choices[15][2] = "Espera limitada";
 choices[15][3] = "Inclusi&oacute;n indefinida";
 answers[15] = 3;
 units[15] = ['56'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1987. ";
 preguntaids[15] = 1987


//  Id pregunta: 1570 Año de creación de pregunta: 2016
 questions[16]= "17)  A los efectos de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, se&ntilde;ale cu&aacute;l NO es un servicio de la sociedad de la informaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos o de mercados y centros comerciales virtuales.";
 choices[16][1] = "El teletexto televisivo y otros servicios equivalentes como las gu&iacute;as electr&oacute;nicas de programas ofrecidas a trav&eacute;s de las plataformas televisivas.";
 choices[16][2] = "El v&iacute;deo bajo demanda, como servicio en que el usuario puede seleccionar a trav&eacute;s de la red, tanto el programa deseado como el momento de su suministro y recepci&oacute;n.";
 choices[16][3] = "El suministro de informaci&oacute;n por v&iacute;a telem&aacute;tica.";
 answers[16] = 1;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 1570. ";
 preguntaids[16] = 1570


//  Id pregunta: 5090 Año de creación de pregunta: 2003
 questions[17]= "18)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[17]= new Array();
 choices[17][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[17][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[17][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[17][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[17] = 1;
 units[17] = ['108'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5090. ";
 preguntaids[17] = 5090


//  Id pregunta: 2560 Año de creación de pregunta: 2004
 questions[18]= "19)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[18]= new Array();
 choices[18][0] = "Notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones p&uacute;blicas";
 choices[18][1] = "Servicios de venta de arte del patrimonio";
 choices[18][2] = "Servicios bancarios";
 choices[18][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[18] = 0;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 2560. Examen Seg-Social A 2004";
 preguntaids[18] = 2560


//  Id pregunta: 3925 Año de creación de pregunta: 2002
 questions[19]= "20)  Los almacenes de datos, en un DFD:";
 choices[19]= new Array();
 choices[19][0] = "pueden conectarse directamente con los terminadores, sin necesitar procesos intermedios";
 choices[19][1] = "por convenio, si el flujo hacia/desde el almac&eacute;n es etiquetado, se supone que representa a parte del registro";
 choices[19][2] = "aparecen desde el DFD de nivel 0 para dar importancia a los datos sobre los procesos que los manejan";
 choices[19][3] = "son modificados tanto en la lectura como en la escritura de datos";
 answers[19] = 1;
 units[19] = ['85', '86'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3925. ";
 preguntaids[19] = 3925


//  Id pregunta: 4098 Año de creación de pregunta: 2003
 questions[20]= "21)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[20]= new Array();
 choices[20][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[20][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[20][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[20][3] = "Todas los correctas";
 answers[20] = 2;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 4098. ";
 preguntaids[20] = 4098


//  Id pregunta: 5707 Año de creación de pregunta: 2007
 questions[21]= "22)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[21]= new Array();
 choices[21][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[21][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[21][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[21][3] = "Ninguno de los anteriores.";
 answers[21] = 1;
 units[21] = ['33'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 5707. Castilla la Mancha B 2006";
 preguntaids[21] = 5707


//  Id pregunta: 5777 Año de creación de pregunta: 2007
 questions[22]= "23)  Con el cifrado se asegura";
 choices[22]= new Array();
 choices[22][0] = "la autenticidad";
 choices[22][1] = "la confidencialidad";
 choices[22][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[22][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[22] = 1;
 units[22] = ['76'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5777. ";
 preguntaids[22] = 5777


//  Id pregunta: 1427 Año de creación de pregunta: 2016
 questions[23]= "24)  De conformidad con el art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola el Gobierno se compone:";
 choices[23]= new Array();
 choices[23][0] = "Del Presidente, de los Vicepresidentes y de los dem&aacute;s miembros que establezca la ley.";
 choices[23][1] = "Del Presidente, de los Ministros, y de los dem&aacute;s miembros que establezca la ley.";
 choices[23][2] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y de los dem&aacute;s miembros que establezca la ley.";
 choices[23][3] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y los Secretarios Generales y de los dem&aacute;s miembros que establezca la ley.";
 answers[23] = 2;
 units[23] = ['1'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 1427. ";
 preguntaids[23] = 1427


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[24]= new Array();
 choices[24][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[24][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[24][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[24][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[24] = 0;
 units[24] = ['14'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 368. Pol&iacute;ticas de igualdad";
 preguntaids[24] = 368


//  Id pregunta: 8319 Año de creación de pregunta: 2011
 questions[25]= "26)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con:";
 choices[25]= new Array();
 choices[25][0] = "Data Marts.";
 choices[25][1] = "Metadata.";
 choices[25][2] = "Middleware.";
 choices[25][3] = "Cubos OLAP.";
 answers[25] = 0;
 units[25] = ['72'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 8319. Examen UPM A2 2011";
 preguntaids[25] = 8319


//  Id pregunta: 3999 Año de creación de pregunta: 2002
 questions[26]= "27)  En una base de datos documental, se denomina '&iacute;ndice de retorno' a:";
 choices[26]= new Array();
 choices[26][0] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes en la base de datos frente a los documentos relevantes recuperados";
 choices[26][1] = "La inversa del &iacute;ndice de precisi&oacute;n";
 choices[26][2] = "La relaci&oacute;n entre el n&uacute;mero de documentos recuperados frente al n&uacute;mero total de documentos recuperados";
 choices[26][3] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados frente a los documentos relevantes en la base de datos";
 answers[26] = 3;
 units[26] = ['81'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3999. ";
 preguntaids[26] = 3999


//  Id pregunta: 979 Año de creación de pregunta: 2016
 questions[27]= "28)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[27]= new Array();
 choices[27][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[27][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[27][2] = "a y b son correctas";
 choices[27][3] = "a y b son incorrectas";
 answers[27] = 2;
 units[27] = ['4', '7', '8', '9'];
 blocks[27] = ['A1', 'A2'];
 comments[27] = "Id Pregunta: 979. Ley 40/2015";
 preguntaids[27] = 979


//  Id pregunta: 1259 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[28]= new Array();
 choices[28][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[28][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[28][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[28][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[28] = 0;
 units[28] = ['14'];
 blocks[28] = ['A3'];
 comments[28] = "Id Pregunta: 1259. ";
 preguntaids[28] = 1259


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[29][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[29][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[29][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[29] = 1;
 units[29] = ['14'];
 blocks[29] = ['A3'];
 comments[29] = "Id Pregunta: 1534. ";
 preguntaids[29] = 1534


//  Id pregunta: 5689 Año de creación de pregunta: 2007
 questions[30]= "31)  En java, &iquest;c&oacute;mo se hace referencia al objeto actual sobre el que ha sido llamado el m&eacute;todo que se esta ejecutando?";
 choices[30]= new Array();
 choices[30][0] = "Con la referencia this.";
 choices[30][1] = "Con la referencia null.";
 choices[30][2] = "No es posible.";
 choices[30][3] = "Invocando el m&eacute;todo get.";
 answers[30] = 0;
 units[30] = ['64'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5689. ";
 preguntaids[30] = 5689


//  Id pregunta: 10785 Año de creación de pregunta: 2015
 questions[31]= "32)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[31][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[31][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[31][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[31] = 3;
 units[31] = ['26'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 10785. ";
 preguntaids[31] = 10785


//  Id pregunta: 10390 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[32]= new Array();
 choices[32][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[32][1] = "Agenda Digital para Europa";
 choices[32][2] = "Todas las anteriores";
 choices[32][3] = "Ninguna de las Anteriores";
 answers[32] = 0;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 10390. ";
 preguntaids[32] = 10390


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[33]= new Array();
 choices[33][0] = "Nueve.";
 choices[33][1] = "Diez.";
 choices[33][2] = "Siete.";
 choices[33][3] = "Ocho.";
 answers[33] = 3;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 195. Uni&oacute;n Europea";
 preguntaids[33] = 195


//  Id pregunta: 1186 Año de creación de pregunta: 2016
 questions[34]= "35)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[34]= new Array();
 choices[34][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[34][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[34][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[34][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[34] = 1;
 units[34] = ['93'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 1186. ";
 preguntaids[34] = 1186


//  Id pregunta: 8330 Año de creación de pregunta: 2011
 questions[35]= "36)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[35]= new Array();
 choices[35][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[35][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[35][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[35][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[35] = 0;
 units[35] = ['63'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8330. Examen UPM A2 2011";
 preguntaids[35] = 8330


//  Id pregunta: 8842 Año de creación de pregunta: 2013
 questions[36]= "37)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[36]= new Array();
 choices[36][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatic Repeat Request)";
 choices[36][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[36][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[36][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[36] = 3;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 8842. ";
 preguntaids[36] = 8842


//  Id pregunta: 10703 Año de creación de pregunta: 2015
 questions[37]= "38)  Indique la FALSA respecto al concepto MapReduce.";
 choices[37]= new Array();
 choices[37][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[37][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[37][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[37][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[37] = 2;
 units[37] = ['73'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10703. ";
 preguntaids[37] = 10703


//  Id pregunta: 3133 Año de creación de pregunta: 2002
 questions[38]= "39)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[38]= new Array();
 choices[38][0] = "Es un programa con 2 versiones de trabajo";
 choices[38][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[38][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[38][3] = "Es un equipo tolerante a fallos";
 answers[38] = 1;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 3133. ";
 preguntaids[38] = 3133


//  Id pregunta: 6945 Año de creación de pregunta: 2010
 questions[39]= "40)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[39]= new Array();
 choices[39][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[39][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[39][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[39][3] = "T&eacute;cnica, funcional y organizativa";
 answers[39] = 0;
 units[39] = ['43'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 6945. Art&iacute;culo 6";
 preguntaids[39] = 6945


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[40]= "41)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[40]= new Array();
 choices[40][0] = "Cuatro millones de euros.";
 choices[40][1] = "Seis millones de euros.";
 choices[40][2] = "Siete millones de euros.";
 choices[40][3] = "Cinco millones de euros.";
 answers[40] = 1;
 units[40] = ['11'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 299. Presupuestos generales";
 preguntaids[40] = 299


//  Id pregunta: 1255 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[41]= new Array();
 choices[41][0] = "Art&iacute;culo 70.";
 choices[41][1] = "Art&iacute;culo 54.";
 choices[41][2] = "Articulo 62.";
 choices[41][3] = "Articulo 55.";
 answers[41] = 1;
 units[41] = ['1'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 1255. ";
 preguntaids[41] = 1255


//  Id pregunta: 7331 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[42]= new Array();
 choices[42][0] = "Si aumenta la calidad del producto, los costes de la no-calidad disminuyen";
 choices[42][1] = "Si aumenta la calidad del producto, los costes de la no-calidad aumentan";
 choices[42][2] = "Si aumenta la calidad del producto, el coste del sistema de calidad no aumenta";
 choices[42][3] = "Si aumenta la calidad del producto, el coste del sistema de calidad disminuye";
 answers[42] = 0;
 units[42] = ['92'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 7331. ";
 preguntaids[42] = 7331


//  Id pregunta: 5195 Año de creación de pregunta: 2006
 questions[43]= "44)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[43]= new Array();
 choices[43][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[43][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[43][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[43][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[43] = 1;
 units[43] = ['104'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5195. ";
 preguntaids[43] = 5195


//  Id pregunta: 9231 Año de creación de pregunta: 2014
 questions[44]= "45)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[44]= new Array();
 choices[44][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[44][1] = "l&iacute;neas de texto.";
 choices[44][2] = "palabras de una l&iacute;nea de texto.";
 choices[44][3] = "letras de una palabra.";
 answers[44] = 3;
 units[44] = ['81'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9231. Examen TIC A1 2013";
 preguntaids[44] = 9231


//  Id pregunta: 6776 Año de creación de pregunta: 2010
 questions[45]= "46)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Gesti&oacute;n de la calidad";
 choices[45][1] = "Norma de la calidad";
 choices[45][2] = "Pol&iacute;tica de la calidad";
 choices[45][3] = "Direcci&oacute;n de la calidad";
 answers[45] = 2;
 units[45] = ['92'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6776. Castilla La Mancha 2009";
 preguntaids[45] = 6776


//  Id pregunta: 8041 Año de creación de pregunta: 2011
 questions[46]= "47)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[46]= new Array();
 choices[46][0] = "B&aacute;sico";
 choices[46][1] = "Medio";
 choices[46][2] = "Alto";
 choices[46][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[46] = 2;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 8041. Examen TIC A2 2010";
 preguntaids[46] = 8041


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[47]= "48)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[47]= new Array();
 choices[47][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[47][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[47][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[47][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[47] = 1;
 units[47] = ['7'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[47] = 232


//  Id pregunta: 5104 Año de creación de pregunta: 2004
 questions[48]= "49)  HTML";
 choices[48]= new Array();
 choices[48][0] = "Define reglas para el intercambio de mensajes";
 choices[48][1] = "Permite incorporar plantillas XSL";
 choices[48][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[48][3] = "Todas son ciertas";
 answers[48] = 2;
 units[48] = ['113'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5104. ";
 preguntaids[48] = 5104


//  Id pregunta: 8985 Año de creación de pregunta: 2013
 questions[49]= "50)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[49]= new Array();
 choices[49][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[49][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[49][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[49][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[49] = 1;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 8985. DUPLICADA";
 preguntaids[49] = 8985


//  Id pregunta: 3950 Año de creación de pregunta: 2002
 questions[50]= "51)  Respecto a la construcci&oacute;n de un prototipo podemos decir:";
 choices[50]= new Array();
 choices[50][0] = "Es el proceso que facilita al programador la creaci&oacute;n del modelo de software a construir";
 choices[50][1] = "Puede adoptar la forma de un 'prototipo que funcione' que describa la interacci&oacute;n hombre-m&aacute;quina, de forma que facilite al usuario la comprensi&oacute;n de c&oacute;mo funcionar&aacute; tal trabajo";
 choices[50][2] = "Puede adoptar la forma de 'un prototipo que funcione' que implementa algunos subconjuntos de la funcionalidad requerida al software deseado";
 choices[50][3] = "Todas las respuestas anteriores son ciertas";
 answers[50] = 3;
 units[50] = ['90'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3950. ";
 preguntaids[50] = 3950


//  Id pregunta: 6557 Año de creación de pregunta: 2003
 questions[51]= "52)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[51]= new Array();
 choices[51][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[51][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[51][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[51][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[51] = 2;
 units[51] = ['77'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 6557. ";
 preguntaids[51] = 6557


//  Id pregunta: 1378 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[52]= new Array();
 choices[52][0] = "110";
 choices[52][1] = "119";
 choices[52][2] = "161";
 choices[52][3] = "25";
 answers[52] = 2;
 units[52] = ['114'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1378. ";
 preguntaids[52] = 1378


//  Id pregunta: 1154 Año de creación de pregunta: 2016
 questions[53]= "54)  El algoritmo de ordenaci&oacute;n que hace uso de un elemento pivote es:";
 choices[53]= new Array();
 choices[53][0] = "Bubblesort.";
 choices[53][1] = "Heapsort.";
 choices[53][2] = "Quicksort.";
 choices[53][3] = "ShellSort.";
 answers[53] = 2;
 units[53] = ['86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 1154. ";
 preguntaids[53] = 1154


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[54]= "55)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[54]= new Array();
 choices[54][0] = "Leve";
 choices[54][1] = "Grave";
 choices[54][2] = "Muy grave";
 choices[54][3] = "No constituye infracci&oacute;n";
 answers[54] = 0;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[54] = 3279


//  Id pregunta: 4458 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[55]= new Array();
 choices[55][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[55][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[55][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[55][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[55] = 1;
 units[55] = ['104'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4458. ";
 preguntaids[55] = 4458


//  Id pregunta: 10936 Año de creación de pregunta: 2015
 questions[56]= "57)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[56][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[56][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[56][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[56] = 3;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 10936. ";
 preguntaids[56] = 10936


//  Id pregunta: 10462 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;les son las tres opciones principales en los modelos de dise&ntilde;o de ITIL v3?";
 choices[57]= new Array();
 choices[57][0] = "Modelo tradicional: presupone una mayor estabilidad del servicio.";
 choices[57][1] = "Modelo &Aacute;gil o RAD: principalmente incremental e iterativo que se basa en la creaci&oacute;n de prototipos.";
 choices[57][2] = "Modelo basado en soluciones software est&aacute;ndar ya empaquetadas.";
 choices[57][3] = "Todos son modelos de ITIL versi&oacute;n 3.";
 answers[57] = 3;
 units[57] = ['101'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10462. ";
 preguntaids[57] = 10462


//  Id pregunta: 6582 Año de creación de pregunta: 2009
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[58]= new Array();
 choices[58][0] = "JAXB";
 choices[58][1] = "AWT";
 choices[58][2] = "AXIS";
 choices[58][3] = "WSE";
 answers[58] = 1;
 units[58] = ['55'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 6582. MAP 2008 A2";
 preguntaids[58] = 6582


//  Id pregunta: 995 Año de creación de pregunta: 2016
 questions[59]= "60)  Segun la ley 40/2015 los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[59]= new Array();
 choices[59][0] = "los &oacute;rganos administrativos";
 choices[59][1] = "las entidades dependientes";
 choices[59][2] = "las unidades administrativas";
 choices[59][3] = "los servicios comunes";
 answers[59] = 2;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 995. Ley 40/2015";
 preguntaids[59] = 995


//  Id pregunta: 1382 Año de creación de pregunta: 2016
 questions[60]= "61)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[60]= new Array();
 choices[60][0] = "135.26.41.94";
 choices[60][1] = "135.26.41.95";
 choices[60][2] = "135.26.41.96";
 choices[60][3] = "135.26.41.97";
 answers[60] = 0;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1382. ";
 preguntaids[60] = 1382


//  Id pregunta: 4419 Año de creación de pregunta: 2002
 questions[61]= "62)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[61]= new Array();
 choices[61][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[61][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[61][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[61][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[61] = 2;
 units[61] = ['49'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 4419. ";
 preguntaids[61] = 4419


//  Id pregunta: 6545 Año de creación de pregunta: 2003
 questions[62]= "63)  Seg&uacute;n el RD 1720/2007, cual de los siguientes es un requisito del documento de seguridad, exclusivo para los niveles medio y alto:";
 choices[62]= new Array();
 choices[62][0] = "La identificacion del responsable o responsables de seguridad.";
 choices[62][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[62][2] = "Los controles periodicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento.";
 choices[62][3] = "La a) y la c) lo son.";
 answers[62] = 3;
 units[62] = ['35'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 6545. ";
 preguntaids[62] = 6545


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[63]= "64)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Acoso sexual.";
 choices[63][1] = "Acoso por raz&oacute;n de sexo.";
 choices[63][2] = "Acoso laboral.";
 choices[63][3] = "Acoso mental.";
 answers[63] = 1;
 units[63] = ['14'];
 blocks[63] = ['A3'];
 comments[63] = "Id Pregunta: 377. Pol&iacute;ticas de igualdad";
 preguntaids[63] = 377


//  Id pregunta: 4702 Año de creación de pregunta: 2002
 questions[64]= "65)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[64]= new Array();
 choices[64][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[64][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[64][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[64][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[64] = 2;
 units[64] = ['105'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4702. ";
 preguntaids[64] = 4702


//  Id pregunta: 4846 Año de creación de pregunta: 2002
 questions[65]= "66)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[65]= new Array();
 choices[65][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[65][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[65][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[65][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[65] = 2;
 units[65] = ['102', '114'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4846. ";
 preguntaids[65] = 4846


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[66]= new Array();
 choices[66][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[66][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[66][2] = "Iniciativa europea de libre flujo de datos.";
 choices[66][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[66] = 2;
 units[66] = ['5'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 108. Uni&oacute;n Europea";
 preguntaids[66] = 108


//  Id pregunta: 4459 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;A qu&eacute; se denomina 'modem nulo'?:";
 choices[67]= new Array();
 choices[67][0] = "A un modem para transportar datos por lineas digitales y que por lo tanto no modula ni demodula nada";
 choices[67][1] = "A un modem sin microprocesador de control";
 choices[67][2] = "A un cable inversor que conecta dos ETDs entre s&iacute;";
 choices[67][3] = "A un equipo que modula y demodula una se&ntilde;al nula";
 answers[67] = 2;
 units[67] = ['102'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4459. ";
 preguntaids[67] = 4459


//  Id pregunta: 6043 Año de creación de pregunta: 2003
 questions[68]= "69)  Seg&uacute;n la metodolog&iacute;a Magerit versi&oacute;n 3 (y 2), el riesgo remanente en el sistema tras la implantaci&oacute;n de lassalvaguardas determinadas en el plan de seguridad de la informaci&oacute;n se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Riesgo retenido.";
 choices[68][1] = "Riesgo acumulado.";
 choices[68][2] = "Riesgo residual.";
 choices[68][3] = "Riesgo supervisado.";
 answers[68] = 2;
 units[68] = ['45'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 6043. TIC B 2007";
 preguntaids[68] = 6043


//  Id pregunta: 6335 Año de creación de pregunta: 2003
 questions[69]= "70)  Indique que respuesta no es correcta. La red transeuropea sTESTA:";
 choices[69]= new Array();
 choices[69][0] = "Corresponde con una de las infraestructuras y servicios comunes de IDABC.";
 choices[69][1] = "Conecta a trav&eacute;s de Internet las redes administrativas de los Estados Miembros y las instituciones europeas.";
 choices[69][2] = "Permite el acceso a los servicios paneuropeos de Administraci&oacute;n Electr&oacute;nica mediante el enlace SARA-sTESTA.";
 choices[69][3] = "Ahorra a los Departamentos de la Administraci&oacute;n el coste de enlaces independientes con administraciones de otros estados miembros";
 answers[69] = 1;
 units[69] = ['103'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 6335. ";
 preguntaids[69] = 6335


//  Id pregunta: 7901 Año de creación de pregunta: 2011
 questions[70]= "71)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[70]= new Array();
 choices[70][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[70][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[70][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[70][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[70] = 0;
 units[70] = ['82'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 7901. Examen TIC A1 2010";
 preguntaids[70] = 7901


//  Id pregunta: 4725 Año de creación de pregunta: 2002
 questions[71]= "72)  Indicar entre las siguientes normas del IEEE la que trata sobre redes Integradas de voz y datos:";
 choices[71]= new Array();
 choices[71][0] = "802.6";
 choices[71][1] = "802.7";
 choices[71][2] = "802.8";
 choices[71][3] = "802.9";
 answers[71] = 3;
 units[71] = ['101'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 4725. ";
 preguntaids[71] = 4725


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[72]= new Array();
 choices[72][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[72][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[72][2] = "Las respuestas a) b) no son correctas.";
 choices[72][3] = "Las respuestas a) y b) son correctas.";
 answers[72] = 3;
 units[72] = ['11'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 298. Presupuestos generales";
 preguntaids[72] = 298


//  Id pregunta: 5799 Año de creación de pregunta: 2007
 questions[73]= "74)  &iquest;Qu&eacute; protocolo de enrutamiento se utiliza principalmente entre los sistemas aut&oacute;nomos en Internet?";
 choices[73]= new Array();
 choices[73][0] = "OSPF";
 choices[73][1] = "RIP";
 choices[73][2] = "BGP";
 choices[73][3] = "RIP2";
 answers[73] = 2;
 units[73] = ['102'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5799. ";
 preguntaids[73] = 5799


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[74]= "75)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[74]= new Array();
 choices[74][0] = "El 23 de julio de 1952.";
 choices[74][1] = "El 18 de abril de 1951.";
 choices[74][2] = "El 16 de abril de 1948.";
 choices[74][3] = "d)Ninguna de las respuestas son correctas.";
 answers[74] = 0;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 169. Uni&oacute;n Europea";
 preguntaids[74] = 169


