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
//  Id pregunta: 4510 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[0]= new Array();
 choices[0][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[0][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[0][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[0][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[0] = 2;
 units[0] = ['110'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4510. ";
 preguntaids[0] = 4510


//  Id pregunta: 9499 Año de creación de pregunta: 2014
 questions[1]= "2)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[1]= new Array();
 choices[1][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[1][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[1][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[1][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[1] = 3;
 units[1] = ['117'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9499. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";
 preguntaids[1] = 9499


//  Id pregunta: 9553 Año de creación de pregunta: 2014
 questions[2]= "3)  Las infracciones leves de la Ley Org&aacute;nica 15/1999:";
 choices[2]= new Array();
 choices[2][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[2][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[2][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[2][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[2] = 1;
 units[2] = ['35'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9553. Art&iacute;culos 45.1 y 47.1 de la Ley Org&aacute;nica 15/1999";
 preguntaids[2] = 9553


//  Id pregunta: 7100 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[3]= new Array();
 choices[3][0] = "Gesti&oacute;n de personal.";
 choices[3][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[3][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[3][3] = "Incidentes de seguridad.";
 answers[3] = 2;
 units[3] = ['46'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 7100. Art&iacute;culo 11 ENS";
 preguntaids[3] = 7100


//  Id pregunta: 4190 Año de creación de pregunta: 2006
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre el acoplamiento normal.";
 choices[4]= new Array();
 choices[4][0] = "Provoca dependencia de ejecuci&oacute;n.";
 choices[4][1] = "Los m&oacute;dulos se refieren a la misma estructura de datos local.";
 choices[4][2] = "No se produce traspaso de par&aacute;metros.";
 choices[4][3] = "Los m&oacute;dulos se refieren a la misma &aacute;rea global de datos.";
 answers[4] = 2;
 units[4] = ['89'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 4190. ";
 preguntaids[4] = 4190


//  Id pregunta: 1043 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta falsa en relacion a las transmisiones de datos ente Administraciones Publicas (art 155 ley 40/2015):";
 choices[5]= new Array();
 choices[5][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[5][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[5][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[5][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[5] = 2;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 1043. Ley 40/2015";
 preguntaids[5] = 1043


//  Id pregunta: 1702 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n m&eacute;trica v.3, la impartici&oacute;n de la formaci&oacute;n a usuarios finales se realiza en:";
 choices[6]= new Array();
 choices[6][0] = "La fase de Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[6][1] = "La fase de Instalaci&oacute;n e Implantaci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[6][2] = "La fase de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[6][3] = "Fuera del &aacute;mbito de M&eacute;trica v3.";
 answers[6] = 3;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1702. ";
 preguntaids[6] = 1702


//  Id pregunta: 1026 Año de creación de pregunta: 2016
 questions[7]= "8)  La recusaci&oacute;n se plantear&aacute;...";
 choices[7]= new Array();
 choices[7][0] = "S&oacute;lo verbalmente";
 choices[7][1] = "S&oacute;lo por escrito";
 choices[7][2] = "Verbalmente o por escrito";
 choices[7][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[7] = 1;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 1026. Ley 40/2015";
 preguntaids[7] = 1026


//  Id pregunta: 4400 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes no es cierta respecto a SSL?";
 choices[8]= new Array();
 choices[8][0] = "Es el acr&oacute;nimo de Secure Sockets Layer, capa segura de interfaz con sockets";
 choices[8][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web";
 choices[8][2] = "En su funcionamiento, se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal (confidencialidad)";
 choices[8][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes";
 answers[8] = 3;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4400. ";
 preguntaids[8] = 4400


//  Id pregunta: 8548 Año de creación de pregunta: 2013
 questions[9]= "10)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[9]= new Array();
 choices[9][0] = "17";
 choices[9][1] = "41";
 choices[9][2] = "47";
 choices[9][3] = "50";
 answers[9] = 1;
 units[9] = ['109'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8548. Consultar en wikipedia List_of_IP_protocol_numbers";
 preguntaids[9] = 8548


//  Id pregunta: 5082 Año de creación de pregunta: 2002
 questions[10]= "11)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?:";
 choices[10]= new Array();
 choices[10][0] = "No me afecta para nada";
 choices[10][1] = "La LSSI es aplicable";
 choices[10][2] = "S&oacute;lo para la publicidad";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[10] = 1;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 5082. ";
 preguntaids[10] = 5082


//  Id pregunta: 1997 Año de creación de pregunta: 2002
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[11]= new Array();
 choices[11][0] = "PROS@.";
 choices[11][1] = "ISTMO.";
 choices[11][2] = "SSD-AAPP.";
 choices[11][3] = "Ninguna de las anteriores.";
 answers[11] = 2;
 units[11] = ['38'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 1997. ";
 preguntaids[11] = 1997


//  Id pregunta: 7020 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[12]= new Array();
 choices[12][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[12][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[12][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[12][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[12] = 2;
 units[12] = ['82'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7020. ";
 preguntaids[12] = 7020


//  Id pregunta: 8954 Año de creación de pregunta: 2013
 questions[13]= "14)  El lenguaje Java es un lenguaje:";
 choices[13]= new Array();
 choices[13][0] = "De herencia simple";
 choices[13][1] = "De herencia m&uacute;ltiple";
 choices[13][2] = "Que no permite la herencia";
 choices[13][3] = "Todas las anteriores son falsas";
 answers[13] = 0;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8954. ";
 preguntaids[13] = 8954


//  Id pregunta: 7349 Año de creación de pregunta: 2010
 questions[14]= "15)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[14]= new Array();
 choices[14][0] = "Dos a&ntilde;os";
 choices[14][1] = "Cuatro a&ntilde;os";
 choices[14][2] = "30 meses";
 choices[14][3] = "60 meses";
 answers[14] = 3;
 units[14] = ['30'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 7349. Examen TIC B 2009";
 preguntaids[14] = 7349


//  Id pregunta: 5760 Año de creación de pregunta: 2007
 questions[15]= "16)  Seg&uacute;n la Norma UNE-ISO/IEC 27002:2009 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[15]= new Array();
 choices[15][0] = "seguridad de los servicios de red";
 choices[15][1] = "sincronizaci&oacute;n de relojes";
 choices[15][2] = "responsabilidades del usuario";
 choices[15][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[15] = 3;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 5760. ";
 preguntaids[15] = 5760


//  Id pregunta: 9846 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Qu&eacute; es el fan-out en dise&ntilde;o estructurado?";
 choices[16]= new Array();
 choices[16][0] = "El grado de acoplamiento externo.";
 choices[16][1] = "El n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[16][2] = "El grado de absorci&oacute;n.";
 choices[16][3] = "El n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 answers[16] = 1;
 units[16] = ['89'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 9846. ";
 preguntaids[16] = 9846


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[17]= new Array();
 choices[17][0] = "Un representante de la Administraci&oacute;n local.";
 choices[17][1] = "Un representante del Tribunal de Cuentas.";
 choices[17][2] = "Un representante del Defensor del Pueblo.";
 choices[17][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[17] = 0;
 units[17] = ['22'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 496. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[17] = 496


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


//  Id pregunta: 3230 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[19]= new Array();
 choices[19][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[19][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[19][2] = "Dos mensajes parecidos producen huellas digitales diferentes";
 choices[19][3] = "La funci&oacute;n hash es reversible";
 answers[19] = 3;
 units[19] = ['77'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3230. ";
 preguntaids[19] = 3230


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[20]= new Array();
 choices[20][0] = "Art. 13, L.O.3/2007.";
 choices[20][1] = "Art. 14, L.O.3/2007.";
 choices[20][2] = "Art. 11, L.O.3/2007.";
 choices[20][3] = "Ninguna es correcta.";
 answers[20] = 2;
 units[20] = ['14'];
 blocks[20] = ['A3'];
 comments[20] = "Id Pregunta: 378. Pol&iacute;ticas de igualdad";
 preguntaids[20] = 378


//  Id pregunta: 5447 Año de creación de pregunta: 2007
 questions[21]= "22)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[21]= new Array();
 choices[21][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[21][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[21][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[21][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[21] = 3;
 units[21] = ['72'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 5447. ";
 preguntaids[21] = 5447


//  Id pregunta: 7241 Año de creación de pregunta: 2010
 questions[22]= "23)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[22]= new Array();
 choices[22][0] = "RD 951/2003";
 choices[22][1] = "RD 952/2003";
 choices[22][2] = "RD 951/2005";
 choices[22][3] = "RD 951/2006";
 answers[22] = 2;
 units[22] = ['92'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 7241. ";
 preguntaids[22] = 7241


//  Id pregunta: 7929 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;C&oacute;mo se denomina el informe elaborado por el Observatorio de Administraci&oacute;n Electr&oacute;nica para analizar de manera espec&iacute;fica, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[23]= new Array();
 choices[23][0] = "Informe PRINCESA.";
 choices[23][1] = "Informe TECNIMAP.";
 choices[23][2] = "Informe IRIA.";
 choices[23][3] = "Informe REINA.";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 7929. Examen TIC A1 2010";
 preguntaids[23] = 7929


//  Id pregunta: 2513 Año de creación de pregunta: 2004
 questions[24]= "25)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[24]= new Array();
 choices[24][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[24][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[24][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[24][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[24] = 3;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 2513. Examen TIC MAP B 2004";
 preguntaids[24] = 2513


//  Id pregunta: 3300 Año de creación de pregunta: 2003
 questions[25]= "26)  Indicar la afirmaci&oacute;n falsa en torno a las matrices de discos RAID:";
 choices[25]= new Array();
 choices[25][0] = "Cuando se haya reemplazado el disco en el que se ha producido el error, los datos podr&aacute;n regenerarse usando la informaci&oacute;n redundante.";
 choices[25][1] = "Los archivos de datos individuales se escriben siempre en m&aacute;s de un disco de forma que, dependiendo del nivel de RAID utilizado, se puedan mejorar el rendimiento y la fiabilidad.";
 choices[25][2] = "En una soluci&oacute;n de hardware, la interfaz de controlador controla la creaci&oacute;n y regeneraci&oacute;n de la informaci&oacute;n redundante.";
 choices[25][3] = "Las estrategias para implementar una matriz redundante de discos independientes (RAID, Redundant Array oIndependent Disks) pueden utilizar soluciones de hardware o de software.";
 answers[25] = 1;
 units[25] = ['53'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3300. ";
 preguntaids[25] = 3300


//  Id pregunta: 10770 Año de creación de pregunta: 2015
 questions[26]= "27)  Seg&uacute;n el RD 806/2014 sobre organizaci&oacute;n e instrumentos operativos de las TIC en la AGE y sus organismos p&uacute;blicos, corresponde la declaraci&oacute;n de medios y servicios compartidos a:";
 choices[26]= new Array();
 choices[26][0] = "DTIC, Direcci&oacute;n de Tecnolog&iacute;s de la Informaci&oacute;n y Comunicaciones.";
 choices[26][1] = "CETIC, Comisi&oacute;n de Estrategia TIC, a propuesta de los Ministros de Hacienda y AAPP y de la Presidencia.";
 choices[26][2] = "A la DTIC, a propuesta de las CMADs, Comisiones Ministeriales de Administraci&oacute;n Digital.";
 choices[26][3] = "La CETIC, a propuesta de la DTIC.";
 answers[26] = 3;
 units[26] = ['26'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10770. ";
 preguntaids[26] = 10770


//  Id pregunta: 8258 Año de creación de pregunta: 2011
 questions[27]= "28)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[27]= new Array();
 choices[27][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[27][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[27][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[27][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[27] = 0;
 units[27] = ['35'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 8258. Examen TIC A2 2010 interna";
 preguntaids[27] = 8258


//  Id pregunta: 1873 Año de creación de pregunta: 2016
 questions[28]= "29)  XML:";
 choices[28]= new Array();
 choices[28][0] = "Es un lenguaje de presentaci&oacute;n similar a HTML, pero m&aacute;s avanzado";
 choices[28][1] = "Es similar a HTML pero con orientaci&oacute;n al mundo del dise&ntilde;o dado que permite realizar p&aacute;ginas web m&aacute;s vistosas y din&aacute;micas.";
 choices[28][2] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos.";
 choices[28][3] = "Es un lenguaje para el intercambio de informaci&oacute;n no estructurada entre diferentes plataformas.";
 answers[28] = 2;
 units[28] = ['74'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 1873. ";
 preguntaids[28] = 1873


//  Id pregunta: 9763 Año de creación de pregunta: 2014
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[29]= new Array();
 choices[29][0] = "Escaneo de iris y de huella dactilar";
 choices[29][1] = "Identificador de usuario y sistema GPS";
 choices[29][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[29][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[29] = 2;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 9763. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";
 preguntaids[29] = 9763


//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[30]= "31)  Una tarjeta de memoria";
 choices[30]= new Array();
 choices[30][0] = "Puede procesar informaci&oacute;n";
 choices[30][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[30][2] = "Nunca puede procesar informaci&oacute;n";
 choices[30][3] = "Son un tipo de tarjeta inteligente";
 answers[30] = 2;
 units[30] = ['119'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 7249. ";
 preguntaids[30] = 7249


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[31]= new Array();
 choices[31][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[31][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[31][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[31][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[31] = 3;
 units[31] = ['22'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 499. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[31] = 499


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[32]= "33)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[32]= new Array();
 choices[32][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[32][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[32][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[32][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[32] = 0;
 units[32] = ['8'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 256. Ley 39/2015";
 preguntaids[32] = 256


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[33]= "34)  El Parlamento Europeo celebrar&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[33][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[33][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[33][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[33] = 0;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 112. Uni&oacute;n Europea";
 preguntaids[33] = 112


//  Id pregunta: 3084 Año de creación de pregunta: 2002
 questions[34]= "35)  Un sistema de gesti&oacute;n de base de datos (SGBD) es relacional si, entre otras cosas:";
 choices[34]= new Array();
 choices[34][0] = "Soporta un lenguaje de manipulaci&oacute;n de datos basado en el c&aacute;lculo referencial";
 choices[34][1] = "Soporta un lenguaje de definici&oacute;n de datos de tipo referencial";
 choices[34][2] = "Es capaz de establecer relaciones con otros SGBD";
 choices[34][3] = "Toda la informaci&oacute;n se representa a nivel l&oacute;gico en forma de tablas";
 answers[34] = 3;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3084. ";
 preguntaids[34] = 3084


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[35]= new Array();
 choices[35][0] = "&lt;canvas&gt;";
 choices[35][1] = "&lt;applet&gt;";
 choices[35][2] = "&lt;keygen&gt;";
 choices[35][3] = "&lt;audio&gt;";
 answers[35] = 1;
 units[35] = ['74'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 9675. ";
 preguntaids[35] = 9675


//  Id pregunta: 10787 Año de creación de pregunta: 2015
 questions[36]= "37)  El derecho y obligaci&oacute;n de relacionarse electr&oacute;nicamente con las Administraciones P&uacute;blicas se recoge en la Ley 39/2015 en el:";
 choices[36]= new Array();
 choices[36][0] = "Art&iacute;culo 4";
 choices[36][1] = "Art&iacute;culo 6";
 choices[36][2] = "Art&iacute;culo 10";
 choices[36][3] = "Art&iacute;culo 14";
 answers[36] = 3;
 units[36] = ['7'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 10787. ";
 preguntaids[36] = 10787


//  Id pregunta: 5482 Año de creación de pregunta: 2007
 questions[37]= "38)  El sistema de gesti&oacute;n de riesgos MAGERIT establece que los subestados de seguridad de un activo son";
 choices[37]= new Array();
 choices[37][0] = "Autenticaci&oacute;n, confidencialidad, inclusi&oacute;n y disponibilidad.";
 choices[37][1] = "Autenticaci&oacute;n, confidencialidad, integridad, disponibilidad y trazabilidad";
 choices[37][2] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 choices[37][3] = "Auditabilidad, calidad, independencia y disposici&oacute;n.";
 answers[37] = 1;
 units[37] = ['45'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 5482. ";
 preguntaids[37] = 5482


//  Id pregunta: 2006 Año de creación de pregunta: 2002
 questions[38]= "39)  &iquest;Cu&aacute;les son las caracter&iacute;sticas fundamentales establecidas por X/Open en el entorno de los sistemas abiertos?:";
 choices[38]= new Array();
 choices[38][0] = "Interoperabilidad, seguridad y portabilidad";
 choices[38][1] = "Portabilidad, interconectividad e interoperabilidad";
 choices[38][2] = "Portabilidad, escalabilidad e interoperabilidad";
 choices[38][3] = "Integridad, interconectivilidad e interoperabilidad";
 answers[38] = 2;
 units[38] = ['48'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2006. ";
 preguntaids[38] = 2006


//  Id pregunta: 8316 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[39]= new Array();
 choices[39][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[39][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[39][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[39][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[39] = 3;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 8316. Examen UPM A2 2011";
 preguntaids[39] = 8316


//  Id pregunta: 9969 Año de creación de pregunta: 2015
 questions[40]= "41)  Seg&uacute;n la gu&iacute;a de comunicaci&oacute;n digital, si un sitio ofrece p&aacute;ginas espec&iacute;ficamente a dispositivos m&oacute;viles. &iquest;A qu&eacute; resoluci&oacute;n es aconsejable optimizar la resoluci&oacute;n?";
 choices[40]= new Array();
 choices[40][0] = "200 x 250 p&iacute;xeles";
 choices[40][1] = "400 x 450 p&iacute;xeles";
 choices[40][2] = "700 x 950 p&iacute;xeles";
 choices[40][3] = "700 x 1150 p&iacute;xeles";
 answers[40] = 0;
 units[40] = ['125'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9969. ";
 preguntaids[40] = 9969


//  Id pregunta: 1132 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes respuestas incluye todas las actividades que se realizan en cada ciclo del modelo del ciclo de vida en espiral?";
 choices[41]= new Array();
 choices[41][0] = "Determinaci&oacute;n de objetivos, An&aacute;lisis de riesgos, Desarrollo y prueba y Planificaci&oacute;n.";
 choices[41][1] = "An&aacute;lisis, Dise&ntilde;o, Construcci&oacute;n y Validaci&oacute;n.";
 choices[41][2] = "Estudio de viabilidad, An&aacute;lisis de requisitos, Especificaci&oacute;n de requisitos, Desarrollo y Pruebas";
 choices[41][3] = "Educci&oacute;n de Requisitos, Generaci&oacute;n de Prototipos, Adaptaci&oacute;n de Prototipos y Desarrollo final.";
 answers[41] = 0;
 units[41] = ['82'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 1132. ";
 preguntaids[41] = 1132


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[42]= new Array();
 choices[42][0] = "Versi&oacute;n digital prioritaria.";
 choices[42][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[42][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[42][3] = "Apertura y transparencia.";
 answers[42] = 0;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[42] = 109


//  Id pregunta: 7334 Año de creación de pregunta: 2010
 questions[43]= "44)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[43]= new Array();
 choices[43][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[43][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[43][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[43][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[43] = 1;
 units[43] = ['93'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 7334. ";
 preguntaids[43] = 7334


//  Id pregunta: 6400 Año de creación de pregunta: 2003
 questions[44]= "45)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en";
 choices[44]= new Array();
 choices[44][0] = "An&aacute;lisis de riesgos";
 choices[44][1] = "An&aacute;lisis de impacto";
 choices[44][2] = "Disponibilidad";
 choices[44][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[44] = 1;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 6400. Examen 2006 JCYL";
 preguntaids[44] = 6400


//  Id pregunta: 10242 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Qu&eacute; Directiva establece las reglas generales para el establecimiento de una Infraestructura de Informaci&oacute;n Espacial en la Comunidad Europea basada en las Infraestructuras de los Estados miembros?";
 choices[45]= new Array();
 choices[45][0] = "INSPIRE";
 choices[45][1] = "SIGPAC";
 choices[45][2] = "SIC";
 choices[45][3] = "SIGMAPA";
 answers[45] = 0;
 units[45] = ['71'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 10242. Directiva INSIDE inspira creaci&oacute;n de la IDEE (Infraestructura Datos Espaciales Espa&ntilde;a)";
 preguntaids[45] = 10242


//  Id pregunta: 2274 Año de creación de pregunta: 2002
 questions[46]= "47)  Respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador, se puede asegurar que:";
 choices[46]= new Array();
 choices[46][0] = "Los derechos de explotaci&oacute;n de las obras en colaboraci&oacute;n, durar&aacute;n toda la vida de los coautores y setenta a&ntilde;os desde la muerte o declaraci&oacute;n de fallecimiento del primer coautor.";
 choices[46][1] = "Las ideas y principios en los que se basa un programa est&aacute;n protegidos mediante los derechos de autor";
 choices[46][2] = "La primera venta de una copia por el titular de los derechos agota el derecho de distribuci&oacute;n de dicha copia";
 choices[46][3] = "Se entiende por reproducci&oacute;n la puesta a disposici&oacute;n del p&uacute;blico del original o de las copias de la obra, en un soporte tangible, mediante su venta, alquiler, pr&eacute;stamo o de cualquier otra forma";
 answers[46] = 2;
 units[46] = ['41'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2274. A: fallecimiento del &uacute;ltimo coautor, no del primero; D: es la definici&oacute;n de distribuci&oacute;n (art.19 RDLeg1/1996)";
 preguntaids[46] = 2274


//  Id pregunta: 9059 Año de creación de pregunta: 2014
 questions[47]= "48)  La gesti&oacute;n NUMA:";
 choices[47]= new Array();
 choices[47][0] = "Significa Not Uniform Memory Access.";
 choices[47][1] = "Significa Not Unit of Memory Available.";
 choices[47][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[47][3] = "La a) y la c)";
 answers[47] = 3;
 units[47] = ['49'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9059. ";
 preguntaids[47] = 9059


//  Id pregunta: 5491 Año de creación de pregunta: 2007
 questions[48]= "49)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[48]= new Array();
 choices[48][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[48][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[48][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[48][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[48] = 1;
 units[48] = ['30'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 5491. ";
 preguntaids[48] = 5491


//  Id pregunta: 10965 Año de creación de pregunta: 2015
 questions[49]= "50)  El informe t&eacute;cnico de la Direcci&oacute;n de Tecnolog&iacute;a de la Informaci&oacute;n y de las Comunicaciones para los expedientes de contrataci&oacute;n TIC:";
 choices[49]= new Array();
 choices[49][0] = "Debe emitirse antes de 10 d&iacute;as";
 choices[49][1] = "Es preceptivo en todo caso";
 choices[49][2] = "Puede emitirse despu&eacute;s de 10 d&iacute;as laborables";
 choices[49][3] = "Es necesario junto con el informe de la CMAD";
 answers[49] = 2;
 units[49] = ['37'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 10965. ";
 preguntaids[49] = 10965


//  Id pregunta: 8424 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[50]= new Array();
 choices[50][0] = "Ley 18/2011";
 choices[50][1] = "Ley 39/2015";
 choices[50][2] = "Las dos anteriores";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = 1;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 8424. ";
 preguntaids[50] = 8424


//  Id pregunta: 9726 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[51]= new Array();
 choices[51][0] = "E.122";
 choices[51][1] = "E.123";
 choices[51][2] = "E.231";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = 1;
 units[51] = ['110'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9726. ";
 preguntaids[51] = 9726


//  Id pregunta: 7588 Año de creación de pregunta: 2010
 questions[52]= "53)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[52]= new Array();
 choices[52][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization).";
 choices[52][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation).";
 choices[52][2] = "SNA (System Network Architecture), de IBM.";
 choices[52][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union-Telecommunications).";
 answers[52] = 3;
 units[52] = ['105'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 7588. Map 2006";
 preguntaids[52] = 7588


//  Id pregunta: 6981 Año de creación de pregunta: 2010
 questions[53]= "54)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[53]= new Array();
 choices[53][0] = "Gesti&oacute;n de la Infraestructura";
 choices[53][1] = "Gesti&oacute;n de Soporte";
 choices[53][2] = "Gesti&oacute;n de Entrega";
 choices[53][3] = "Gesti&oacute;n de Aplicaciones";
 answers[53] = 0;
 units[53] = ['101'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 6981. TIC-B 2009 bloque desarrollo";
 preguntaids[53] = 6981


//  Id pregunta: 8090 Año de creación de pregunta: 2011
 questions[54]= "55)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[54]= new Array();
 choices[54][0] = "WWN";
 choices[54][1] = "MAC";
 choices[54][2] = "SPOF";
 choices[54][3] = "IP";
 answers[54] = 0;
 units[54] = ['53'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 8090. Analista Ayto. Madrid 2010";
 preguntaids[54] = 8090


//  Id pregunta: 9067 Año de creación de pregunta: 2014
 questions[55]= "56)  Se&ntilde;ale la respuesta correcta:";
 choices[55]= new Array();
 choices[55][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[55][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[55][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[55][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[55] = 3;
 units[55] = ['71'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9067. ";
 preguntaids[55] = 9067


//  Id pregunta: 7122 Año de creación de pregunta: 2010
 questions[56]= "57)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante...";
 choices[56]= new Array();
 choices[56][0] = "Orden del Ministerio de Presidencia";
 choices[56][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[56][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[56][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[56] = 3;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 7122. Art&iacute;culo 19 RD 1671/2009";
 preguntaids[56] = 7122


//  Id pregunta: 10181 Año de creación de pregunta: 2015
 questions[57]= "58)  Respecto a la imagen institucional en redes sociales de la AGE es correcto que:";
 choices[57]= new Array();
 choices[57][0] = "En las redes sociales que lo permitan, el fondo de todas las p&aacute;ginas tendr&aacute; color amarillo.";
 choices[57][1] = "El fondo de las p&aacute;ginas se dise&ntilde;ar&aacute; optimizado a un tama&ntilde;o para pantallas de 800 x 600 p&iacute;xeles de anchura.";
 choices[57][2] = "Las dimensiones de la imagen del perfil ser&aacute;n las mismas para todas las redes sociales.";
 choices[57][3] = "La imagen del perfil deber&aacute; incluir siempre la denominaci&oacute;n ministerial.";
 answers[57] = 0;
 units[57] = ['125'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10181. Examen TIC A1 2014";
 preguntaids[57] = 10181


//  Id pregunta: 10971 Año de creación de pregunta: 2015
 questions[58]= "59)  Seg&uacute;n la ley 19/2013 de transparencia y en lo referente al buen gobierno considera:";
 choices[58]= new Array();
 choices[58][0] = "Infracci&oacute;n disciplinaria muy grave, el acoso laboral.";
 choices[58][1] = "Infracci&oacute;n muy grave en materia de gesti&oacute;n econ&oacute;mico-presupuestaria, el incumplimiento de la obligaci&oacute;n de rendir cuentas regulada en el art&iacute;culo 137 de la Ley 47/2003, General Presupuestaria.";
 choices[58][2] = "Infracci&oacute;n grave, la intervenci&oacute;n en un procedimiento administrativo cuando se d&eacute; alguna de las causas de abstenci&oacute;n legalmente se&ntilde;aladas.";
 choices[58][3] = "Todas son verdaderas.";
 answers[58] = 3;
 units[58] = ['22'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 10971. ";
 preguntaids[58] = 10971


//  Id pregunta: 4474 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[59]= new Array();
 choices[59][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A a las de clase C";
 choices[59][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[59][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[59][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[59] = 0;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4474. ";
 preguntaids[59] = 4474


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[60]= "61)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[60]= new Array();
 choices[60][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[60][1] = "Las comunicaciones comerciales";
 choices[60][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[60][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[60] = 0;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[60] = 5917


//  Id pregunta: 6211 Año de creación de pregunta: 2003
 questions[61]= "62)  &iquest;Cu&aacute;l es el orden correcto en el que se realizan los pasos en un proceso de reingenier&iacute;a?";
 choices[61]= new Array();
 choices[61][0] = "Ingenier&iacute;a directa, ingenier&iacute;a inversa, an&aacute;lisis de c&oacute;digo, redise&ntilde;o y restructuraci&oacute;n.";
 choices[61][1] = "An&aacute;lisis de c&oacute;digo, redise&ntilde;o, ingenier&iacute;a inversa, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[61][2] = "An&aacute;lisis de c&oacute;digo, ingenier&iacute;a inversa, redise&ntilde;o, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[61][3] = "An&aacute;lisis de c&oacute;digo, reestructuraci&oacute;n, ingenier&iacute;a inversa, redise&ntilde;o e ingenier&iacute;a directa.";
 answers[61] = 3;
 units[61] = ['96'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6211. Examen TIC A Castilla La Mancha 2007";
 preguntaids[61] = 6211


//  Id pregunta: 9103 Año de creación de pregunta: 2014
 questions[62]= "63)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[62]= new Array();
 choices[62][0] = "son desarrollados por muchos fabricantes.";
 choices[62][1] = "usan memoria distribuida y no compartida.";
 choices[62][2] = "son soluciones altamente propietarias.";
 choices[62][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[62] = 2;
 units[62] = ['50'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9103. Examen TIC-A1 2013";
 preguntaids[62] = 9103


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[63]= "64)  El Factor de Sostenibilidad de la pensi&oacute;n de jubilaci&oacute;n, regulado en el art&iacute;culo 211 del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social:";
 choices[63]= new Array();
 choices[63][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[63][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[63][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[63][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[63] = 2;
 units[63] = ['14'];
 blocks[63] = ['A3'];
 comments[63] = "Id Pregunta: 359. Estado del Bienestar";
 preguntaids[63] = 359


//  Id pregunta: 3808 Año de creación de pregunta: 2002
 questions[64]= "65)  En el modelo en cascada del ciclo de vida de un &quot;software&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[64]= new Array();
 choices[64][0] = "La fase de especificaci&oacute;n de requisitos depende del entorno tecnol&oacute;gico del Sistema de Informaci&oacute;n (SI)";
 choices[64][1] = "Se puede pasar por las fases de planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n y pruebas, sin necesidad de completar cada una de ellas";
 choices[64][2] = "La fase de dise&ntilde;o se denomina an&aacute;lisis funcional";
 choices[64][3] = "La decisi&oacute;n del paso de una fase a la siguiente se toma en funci&oacute;n de si la documentaci&oacute;n asociada a esa fase est&aacute; completa o no";
 answers[64] = 3;
 units[64] = ['82'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 3808. ";
 preguntaids[64] = 3808


//  Id pregunta: 7587 Año de creación de pregunta: 2010
 questions[65]= "66)  Seg&uacute;n el RD 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas:";
 choices[65]= new Array();
 choices[65][0] = "No requieren la aplicaci&oacute;n de niveles de seguridad.";
 choices[65][1] = "Deben reunir las medidas calificadas como de nivel b&aacute;sico.";
 choices[65][2] = "Deben reunir las medidas calificadas como de nivel medio.";
 choices[65][3] = "Deben reunir las medidas calificadas como de nivel alto.";
 answers[65] = 2;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 7587. Similar a Map 2006";
 preguntaids[65] = 7587


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[66]= "67)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[66]= new Array();
 choices[66][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[66][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[66][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[66][3] = "todas son correctas";
 answers[66] = 3;
 units[66] = ['7'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 248. Ley 39/2015";
 preguntaids[66] = 248


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[67]= "68)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[67]= new Array();
 choices[67][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[67][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[67][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[67][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[67] = 2;
 units[67] = ['7'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 1062. ";
 preguntaids[67] = 1062


//  Id pregunta: 1579 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al modelo de desarrollo en espiral:";
 choices[68]= new Array();
 choices[68][0] = "Fue propuesto por Mills en 1980.";
 choices[68][1] = "Cada ciclo de desarrollo se divide en 4 fases: &quot;definici&oacute;n de objetivos&quot;, &quot;evaluaci&oacute;n y reducci&oacute;n de riesgos&quot;, &quot;desarrollo y validaci&oacute;n&quot; y &quot;planificaci&oacute;n&quot;.";
 choices[68][2] = "El radio de la espiral representa el incremento del riesgo a lo largo del proyecto.";
 choices[68][3] = "El ciclo de vida completo se inicia con la fase de &quot;planificaci&oacute;n&quot;.";
 answers[68] = 1;
 units[68] = ['82'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 1579. ";
 preguntaids[68] = 1579


//  Id pregunta: 8435 Año de creación de pregunta: 2011
 questions[69]= "70)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[69]= new Array();
 choices[69][0] = "Una representaci&oacute;n del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[69][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[69][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[69][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[69] = 0;
 units[69] = ['2'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 8435. ";
 preguntaids[69] = 8435


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[70]= new Array();
 choices[70][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[70][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[70][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[70][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[70] = 1;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 119. Uni&oacute;n Europea";
 preguntaids[70] = 119


//  Id pregunta: 6278 Año de creación de pregunta: 2007
 questions[71]= "72)  En qu&eacute; proceso se obtiene el producto &quot;Requisitos de Implantaci&oacute;n&quot;";
 choices[71]= new Array();
 choices[71][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[71][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[71][2] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[71][3] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 answers[71] = 0;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6278. ";
 preguntaids[71] = 6278


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[72]= "73)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[72]= new Array();
 choices[72][0] = "Tres a&ntilde;os.";
 choices[72][1] = "Cuatro a&ntilde;os.";
 choices[72][2] = "Cinco a&ntilde;os.";
 choices[72][3] = "Seis a&ntilde;os.";
 answers[72] = 3;
 units[72] = ['5'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[72] = 143


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[73]= "74)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[73]= new Array();
 choices[73][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[73][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[73][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[73][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[73] = 0;
 units[73] = ['10'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 1977. ";
 preguntaids[73] = 1977


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[74]= "75)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[74]= new Array();
 choices[74][0] = "El Presidente del Consejo Europeo.";
 choices[74][1] = "La Comisi&oacute;n.";
 choices[74][2] = "El Consejo.";
 choices[74][3] = "El Parlamento Europeo.";
 answers[74] = 2;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 148. Uni&oacute;n Europea";
 preguntaids[74] = 148


