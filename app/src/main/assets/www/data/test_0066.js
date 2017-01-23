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
//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[0]= "1)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[0]= new Array();
 choices[0][0] = "El Presidente del Congreso de los Diputados.";
 choices[0][1] = "El Presidente del Gobierno.";
 choices[0][2] = "El Rey.";
 choices[0][3] = "El Consejo de Ministros.";
 answers[0] = 2;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 61. Constituci&oacute;n de 1978";
 preguntaids[0] = 61


//  Id pregunta: 8898 Año de creación de pregunta: 2013
 questions[1]= "2)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[1]= new Array();
 choices[1][0] = "Regulares y d&eacute;biles.";
 choices[1][1] = "Fuertes y d&eacute;biles.";
 choices[1][2] = "A y B son correctas.";
 choices[1][3] = "Ninguna de las anteriores es correcta.";
 answers[1] = 2;
 units[1] = ['85'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 8898. Examen AGE TIC A1 2011";
 preguntaids[1] = 8898


//  Id pregunta: 1133 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n con el modelo de proceso unificado de desarrollo software:";
 choices[2]= new Array();
 choices[2][0] = "Modelo de proceso inspirado en los modelos de ciclo de vida iterativos para el desarrollo de sistemas software.";
 choices[2][1] = "Los proyectos se organizan en cinco fases: Inicio, Elaboraci&oacute;n, Construcci&oacute;n, Transici&oacute;n y Entrega.";
 choices[2][2] = "Es un modelo centrado en la arquitectura.";
 choices[2][3] = "Est&aacute; dirigido por casos de uso.";
 answers[2] = 1;
 units[2] = ['82'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 1133. ";
 preguntaids[2] = 1133


//  Id pregunta: 3251 Año de creación de pregunta: 2003
 questions[3]= "4)  En el sistema operativo UNIX los estados en los que puede estar un proceso :";
 choices[3]= new Array();
 choices[3][0] = "Son dos, donde el proceso 0 corresponde al proceso intercambiador";
 choices[3][1] = "Son 8, donde el proceso 0 se denimina init, y es el antecesor de todos los procesos";
 choices[3][2] = "Son 9, entre los que se encuentran los procesos ejecuci&oacute;n en modo de usuario y ejecuci&oacute;n en modo n&uacute;cleo";
 choices[3][3] = "Son 8, entre ellos el proceso cerrado o nonato que significa que est&aacute; aguardando un suceso y tiene que intercambiarse desde la memoria secundaria";
 answers[3] = 2;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3251. ";
 preguntaids[3] = 3251


//  Id pregunta: 5695 Año de creación de pregunta: 2007
 questions[4]= "5)  Las siglas CCNA se corresponden con:";
 choices[4]= new Array();
 choices[4][0] = "Una metodolog&iacute;a de gesti&oacute;n de proyectos en Tecnolog&iacute;as de is Informaci&oacute;n.";
 choices[4][1] = "Una metodolog&iacute;a para el an&aacute;lisis y gesti&oacute;n de riesgos en Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[4][2] = "Metodolog&iacute;a de gesti&oacute;n de Ia seguridad en las Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[4][3] = "Una certificaci&oacute;n de Cisco.";
 answers[4] = 3;
 units[4] = ['102'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5695. ";
 preguntaids[4] = 5695


//  Id pregunta: 7509 Año de creación de pregunta: 2010
 questions[5]= "6)  En el entorno de escritorio KDE, Karbon es:";
 choices[5]= new Array();
 choices[5][0] = "El navegador del escritorio.";
 choices[5][1] = "Un generador de informes para la empresa.";
 choices[5][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas.";
 choices[5][3] = "Un programa de dibujo vectorial.";
 answers[5] = 3;
 units[5] = ['66'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7509. Similar a Map 2005";
 preguntaids[5] = 7509


//  Id pregunta: 2701 Año de creación de pregunta: 2002
 questions[6]= "7)  Con 3 discos SCSI de 145 Gbytes en modalidad RAID 5, se obtiene una capacidad total neta de:";
 choices[6]= new Array();
 choices[6][0] = "145 Gbytes";
 choices[6][1] = "435 Gbytes";
 choices[6][2] = "290 Gbytes";
 choices[6][3] = "217.5 Gbytes";
 answers[6] = 2;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2701. ";
 preguntaids[6] = 2701


//  Id pregunta: 10387 Año de creación de pregunta: 2015
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[7]= new Array();
 choices[7][0] = "Crecimiento inteligente";
 choices[7][1] = "Crecimiento sostenible";
 choices[7][2] = "Crecimiento integrador";
 choices[7][3] = "Todas las anteriores";
 answers[7] = 3;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 10387. ";
 preguntaids[7] = 10387


//  Id pregunta: 6645 Año de creación de pregunta: 2009
 questions[8]= "9)  Indique cuales son las funciones fundamentales de la Comisi&oacute;n Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[8]= new Array();
 choices[8][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas. Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a. Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[8][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[8][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[8][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[8] = 0;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 6645. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[8] = 6645


//  Id pregunta: 6090 Año de creación de pregunta: 2003
 questions[9]= "10)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[9]= new Array();
 choices[9][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[9][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[9][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[9][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[9] = 3;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 6090. Examen TIC A1 MAP 2007";
 preguntaids[9] = 6090


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[10]= new Array();
 choices[10][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[10][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[10][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[10][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[10] = 1;
 units[10] = ['11'];
 blocks[10] = ['A2'];
 comments[10] = "Id Pregunta: 302. Presupuestos generales";
 preguntaids[10] = 302


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[11]= "12)  La sede del Parlamento Europeo se encuentra en:";
 choices[11]= new Array();
 choices[11][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[11][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[11][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[11][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[11] = 1;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 171. Uni&oacute;n Europea";
 preguntaids[11] = 171


//  Id pregunta: 4732 Año de creación de pregunta: 2002
 questions[12]= "13)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[12]= new Array();
 choices[12][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[12][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[12][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[12][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[12] = 3;
 units[12] = ['112'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4732. ";
 preguntaids[12] = 4732


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[13]= "14)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[13]= new Array();
 choices[13][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[13][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[13][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[13][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[13] = 0;
 units[13] = ['7'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[13] = 8267


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[14]= new Array();
 choices[14][0] = "El Presidente del Senado.";
 choices[14][1] = "El Defensor del Pueblo.";
 choices[14][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[14][3] = "El Presidente del Gobierno.";
 answers[14] = 0;
 units[14] = ['1'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 62. Constituci&oacute;n de 1978";
 preguntaids[14] = 62


//  Id pregunta: 3110 Año de creación de pregunta: 2002
 questions[15]= "16)  Uno de los problemas m&aacute;s importantes en la aplicaci&oacute;n de los computadores paralelos consiste en:";
 choices[15]= new Array();
 choices[15][0] = "Su gran volumen";
 choices[15][1] = "Elevada potencia consumida";
 choices[15][2] = "Su dif&iacute;cil programaci&oacute;n";
 choices[15][3] = "El escaso hardware disponible";
 answers[15] = 2;
 units[15] = ['49'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3110. ";
 preguntaids[15] = 3110


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[16][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[16][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[16][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[16] = 1;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[16] = 120


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[17]= new Array();
 choices[17][0] = "Versi&oacute;n digital prioritaria.";
 choices[17][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[17][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[17][3] = "Apertura y transparencia.";
 answers[17] = 0;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[17] = 109


//  Id pregunta: 2033 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;ntos niveles de adecuaci&oacute;n hay en WAI?";
 choices[18]= new Array();
 choices[18][0] = "3";
 choices[18][1] = "4";
 choices[18][2] = "5";
 choices[18][3] = "6";
 answers[18] = 0;
 units[18] = ['42'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2033. ";
 preguntaids[18] = 2033


//  Id pregunta: 3633 Año de creación de pregunta: 2004
 questions[19]= "20)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[19]= new Array();
 choices[19][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[19][1] = "El responsable de mantenimiento y el jefe de proyecto";
 choices[19][2] = "El equipo de mantenimiento y el jefe de proyecto";
 choices[19][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios";
 answers[19] = 2;
 units[19] = ['91'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 3633. Pregunta Junta Andalucia - A";
 preguntaids[19] = 3633


//  Id pregunta: 4991 Año de creación de pregunta: 2002
 questions[20]= "21)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[20][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[20][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[20][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[20] = 3;
 units[20] = ['121'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4991. ";
 preguntaids[20] = 4991


//  Id pregunta: 4576 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[21]= new Array();
 choices[21][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[21][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[21][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[21][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[21] = 0;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4576. ";
 preguntaids[21] = 4576


//  Id pregunta: 5186 Año de creación de pregunta: 2003
 questions[22]= "23)  Sobre SNMP indicar la correcta";
 choices[22]= new Array();
 choices[22][0] = "Conexi&oacute;n IP orientada a conexi&oacute;n";
 choices[22][1] = "Conexi&oacute;n IP no orientada a conexi&oacute;n";
 choices[22][2] = "Conexi&oacute;n UDP no orientada a conexi&oacute;n";
 choices[22][3] = "Conexi&oacute;n TCP orientada a conexi&oacute;n";
 answers[22] = 2;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5186. ";
 preguntaids[22] = 5186


//  Id pregunta: 2617 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[23]= new Array();
 choices[23][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[23][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[23][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[23][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[23] = 0;
 units[23] = ['74'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2617. Es Wireless Markup Language";
 preguntaids[23] = 2617


//  Id pregunta: 6780 Año de creación de pregunta: 2010
 questions[24]= "25)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[24]= new Array();
 choices[24][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[24][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[24][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[24][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[24] = 2;
 units[24] = ['45'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 6780. Castilla La Mancha 2009";
 preguntaids[24] = 6780


//  Id pregunta: 7003 Año de creación de pregunta: 2010
 questions[25]= "26)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[25]= new Array();
 choices[25][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[25][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[25][2] = "Fijar el calendario de hitos y entregas";
 choices[25][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[25] = 3;
 units[25] = ['84'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7003. TIC-B 2009 bloque desarrollo";
 preguntaids[25] = 7003


//  Id pregunta: 3318 Año de creación de pregunta: 2004
 questions[26]= "27)  Indique la afirmaci&oacute;n incorrecta, respecto a SMP";
 choices[26]= new Array();
 choices[26][0] = "Es una arquitectura de ordenador con performances muy r&aacute;pidas";
 choices[26][1] = "Tiene multiples CPU disponibles para efectuar procesos individuales completos simult&aacute;neamente";
 choices[26][2] = "Todas las CPU comparten la misma memoria";
 choices[26][3] = "Sus siglas son Symetric Massively Processing";
 answers[26] = 3;
 units[26] = ['49'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 3318. ";
 preguntaids[26] = 3318


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[27]= new Array();
 choices[27][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[27][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[27][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[27][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[27] = 2;
 units[27] = ['7'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 208. Ley 39/2015";
 preguntaids[27] = 208


//  Id pregunta: 9494 Año de creación de pregunta: 2014
 questions[28]= "29)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[28]= new Array();
 choices[28][0] = "802.11f";
 choices[28][1] = "802.11h";
 choices[28][2] = "802.11i";
 choices[28][3] = "802.11r";
 answers[28] = 2;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9494. ";
 preguntaids[28] = 9494


//  Id pregunta: 7103 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[29]= new Array();
 choices[29][0] = "Cada dos a&ntilde;os";
 choices[29][1] = "Al menos, cada dos a&ntilde;os";
 choices[29][2] = "Cada a&ntilde;o";
 choices[29][3] = "Al menos, una vez al a&ntilde;o";
 answers[29] = 1;
 units[29] = ['46'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 7103. Art&iacute;culo 34 ENS. Anexo III: para los sistemas de categor&iacute;a B&Aacute;SICA, bastar&aacute; una autoevaluaci&oacute;n.";
 preguntaids[29] = 7103


//  Id pregunta: 10786 Año de creación de pregunta: 2015
 questions[30]= "31)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[30]= new Array();
 choices[30][0] = "Ley 39/2015";
 choices[30][1] = "Ley 40/2015";
 choices[30][2] = "Ley 29/2015";
 choices[30][3] = "Ley 30/2015";
 answers[30] = 0;
 units[30] = ['7'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 10786. ";
 preguntaids[30] = 10786


//  Id pregunta: 2981 Año de creación de pregunta: 2002
 questions[31]= "32)  Los procedimientos b&aacute;sicos para realizar una transferencia elemental entre la UCP y un perif&eacute;rico son:";
 choices[31]= new Array();
 choices[31][0] = "E/S programada, acceso directo a memoria y canal de E/S";
 choices[31][1] = "E/S programada, interrupciones y acceso directo a memoria";
 choices[31][2] = "Memoria multipuerta y robo de ciclo";
 choices[31][3] = "Canal selector para perif&eacute;ricos r&aacute;pidos y canal multiplexor para perif&eacute;ricos lentos";
 answers[31] = 1;
 units[31] = ['52'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 2981. ";
 preguntaids[31] = 2981


//  Id pregunta: 10290 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[32]= new Array();
 choices[32][0] = "Repetible";
 choices[32][1] = "Verificado";
 choices[32][2] = "Gestionado";
 choices[32][3] = "Optimizado";
 answers[32] = 1;
 units[32] = ['31'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 10290. ";
 preguntaids[32] = 10290


//  Id pregunta: 5166 Año de creación de pregunta: 2003
 questions[33]= "34)  Dentro de las Tecnolog&iacute;as de nivel acceso usadas en ATM se&ntilde;alar  la Falsa";
 choices[33]= new Array();
 choices[33][0] = "PSH";
 choices[33][1] = "SDH";
 choices[33][2] = "ATM";
 choices[33][3] = "SAR";
 answers[33] = 3;
 units[33] = ['107'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 5166. ";
 preguntaids[33] = 5166


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[34]= "35)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[34]= new Array();
 choices[34][0] = "Infracci&oacute;n muy grave";
 choices[34][1] = "Infracci&oacute;n grave";
 choices[34][2] = "Infracci&oacute;n leve";
 choices[34][3] = "No se considera infracci&oacute;n";
 answers[34] = 1;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[34] = 3342


//  Id pregunta: 8205 Año de creación de pregunta: 2011
 questions[35]= "36)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[35]= new Array();
 choices[35][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[35][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[35][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[35][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[35] = 0;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 8205. Examen TIC A2 2010 interna";
 preguntaids[35] = 8205


//  Id pregunta: 10803 Año de creación de pregunta: 2015
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de los siguientes no es un operador b&aacute;sico en SQL:";
 choices[36]= new Array();
 choices[36][0] = "Proyecci&oacute;n";
 choices[36][1] = "Intersecci&oacute;n";
 choices[36][2] = "Producto cartesiano";
 choices[36][3] = "Uni&oacute;n";
 answers[36] = 1;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10803. ";
 preguntaids[36] = 10803


//  Id pregunta: 9396 Año de creación de pregunta: 2014
 questions[37]= "38)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[37]= new Array();
 choices[37][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[37][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[37][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[37][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[37] = 1;
 units[37] = ['106'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 9396. Examen TIC A2  2013";
 preguntaids[37] = 9396


//  Id pregunta: 2500 Año de creación de pregunta: 2004
 questions[38]= "39)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[38]= new Array();
 choices[38][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[38][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[38][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[38][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[38] = 1;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2500. Examen TIC MAP B 2004";
 preguntaids[38] = 2500


//  Id pregunta: 9442 Año de creación de pregunta: 2014
 questions[39]= "40)  La principal mejora de SNMPv3 es:";
 choices[39]= new Array();
 choices[39][0] = "Mayor seguridad";
 choices[39][1] = "Mayor rendimiento";
 choices[39][2] = "Mayor eficacia";
 choices[39][3] = "Mayor simplicidad";
 answers[39] = 0;
 units[39] = ['114'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9442. ";
 preguntaids[39] = 9442


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[40]= "41)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[40]= new Array();
 choices[40][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[40][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[40][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[40][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[40] = 69


//  Id pregunta: 10142 Año de creación de pregunta: 2015
 questions[41]= "42)  La Entidad AENOR:";
 choices[41]= new Array();
 choices[41][0] = "Es una entidad p&uacute;blica que elabora normas t&eacute;cnicas espa&ntilde;olas, impulsando la aportaci&oacute;n nacional en la elaboraci&oacute;n de normas europeas e internacionales.";
 choices[41][1] = "Desarrolla actividades de normalizaci&oacute;n y certificaci&oacute;n (N+C) exclusivamente en el &aacute;mbito del sector p&uacute;blico.";
 choices[41][2] = "Es una entidad espa&ntilde;ola, privada, independiente, sin &aacute;nimo de lucro, que certifica productos, servicios y empresas (sistemas).";
 choices[41][3] = "Es la entidad p&uacute;blica internacional responsable de la elaboraci&oacute;n de los est&aacute;ndares ISO/IEC.";
 answers[41] = 2;
 units[41] = ['48'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 10142. Examen TIC A1 2014";
 preguntaids[41] = 10142


//  Id pregunta: 8339 Año de creación de pregunta: 2011
 questions[42]= "43)  En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[42]= new Array();
 choices[42][0] = "Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[42][1] = "Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[42][2] = "Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[42][3] = "Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[42] = 1;
 units[42] = ['62'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 8339. Examen UC3M 2010";
 preguntaids[42] = 8339


//  Id pregunta: 9926 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[43]= new Array();
 choices[43][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[43][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[43][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[43][3] = "Todas las anteriores se deben incluir.";
 answers[43] = 3;
 units[43] = ['44'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 9926. ";
 preguntaids[43] = 9926


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[44]= "45)  El Colegio de Comisarios se re&uacute;ne:";
 choices[44]= new Array();
 choices[44][0] = "Una vez por semana.";
 choices[44][1] = "Una vez al mes.";
 choices[44][2] = "Dos veces en semana.";
 choices[44][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[44] = 0;
 units[44] = ['5'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 135. Uni&oacute;n Europea";
 preguntaids[44] = 135


//  Id pregunta: 9251 Año de creación de pregunta: 2014
 questions[45]= "46)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[45]= new Array();
 choices[45][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[45][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[45][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[45][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[45] = 1;
 units[45] = ['91'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 9251. Examen TIC A2 2013";
 preguntaids[45] = 9251


//  Id pregunta: 6959 Año de creación de pregunta: 2010
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[46]= new Array();
 choices[46][0] = "WebLogic";
 choices[46][1] = "WebSphere";
 choices[46][2] = "Apache Tomcat";
 choices[46][3] = "Jboss";
 answers[46] = 2;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6959. TIC-B 2009 bloque desarrollo";
 preguntaids[46] = 6959


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[47]= new Array();
 choices[47][0] = "Secure Transport Over bRoad toKens";
 choices[47][1] = "Security idenTity acrOss boRders linKed";
 choices[47][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[47][3] = "Safe noTes stOring encRypted Keys";
 answers[47] = 1;
 units[47] = ['77', '78'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9783. ";
 preguntaids[47] = 9783


//  Id pregunta: 4138 Año de creación de pregunta: 2003
 questions[48]= "49)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[48]= new Array();
 choices[48][0] = "Un filtro paso bajo es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[48][1] = "La ecualizaci&oacute;n del histograma es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[48][2] = "El &quot;filtro de mediana&quot; elige el p&iacute;xel siguiente al central de los valores de la ventana.";
 choices[48][3] = "El filtro paso alto suaviza la imagen.";
 answers[48] = 1;
 units[48] = ['80'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 4138. ";
 preguntaids[48] = 4138


//  Id pregunta: 6740 Año de creación de pregunta: 2009
 questions[49]= "50)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[49]= new Array();
 choices[49][0] = "Un determinado virus inform&aacute;tico";
 choices[49][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[49][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[49][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[49] = 2;
 units[49] = ['119'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6740. MAP 2008 A1";
 preguntaids[49] = 6740


//  Id pregunta: 6217 Año de creación de pregunta: 2003
 questions[50]= "51)  En un dise&ntilde;o de Software es deseable que exista entre los distintos m&oacute;dulos que lo componen:";
 choices[50]= new Array();
 choices[50][0] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&aacute;xima.";
 choices[50][1] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&iacute;nima.";
 choices[50][2] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&aacute;xima.";
 choices[50][3] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&iacute;nima.";
 answers[50] = 2;
 units[50] = ['89'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 6217. Examen TIC A Castilla La Mancha 2007";
 preguntaids[50] = 6217


//  Id pregunta: 8777 Año de creación de pregunta: 2013
 questions[51]= "52)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI:";
 choices[51]= new Array();
 choices[51][0] = "Equivale al cable clase E de ISO";
 choices[51][1] = "Es el cable adecuado para transmisiones de 100 Mbps";
 choices[51][2] = "Su rango de funcionamiento alcanza los 100 Mhz";
 choices[51][3] = "Se trata de una categor&iacute;a obsoleta";
 answers[51] = 0;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8777. ";
 preguntaids[51] = 8777


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[52]= "53)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[52]= new Array();
 choices[52][0] = "Enero de 2015.";
 choices[52][1] = "Enero de 2016.";
 choices[52][2] = "Diciembre de 2016.";
 choices[52][3] = "Diciembre de 2015.";
 answers[52] = 0;
 units[52] = ['10'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[52] = 10125


//  Id pregunta: 9210 Año de creación de pregunta: 2014
 questions[53]= "54)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[53]= new Array();
 choices[53][0] = "Spoofing.";
 choices[53][1] = "Man in the middle.";
 choices[53][2] = "Denial of Service.";
 choices[53][3] = "Flooding.";
 answers[53] = 2;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 9210. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[53] = 9210


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[54]= "55)  Se consideran interesados en el procedimiento administrativo:";
 choices[54]= new Array();
 choices[54][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[54][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[54][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[54][3] = "todas son correctas";
 answers[54] = 0;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[54] = 222


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; pa&iacute;s entr&oacute; a formar parte de la Uni&oacute;n Europea el mismo a&ntilde;o en que formaliz&oacute; su adhesi&oacute;n nuestro pa&iacute;s?";
 choices[55]= new Array();
 choices[55][0] = "Grecia";
 choices[55][1] = "Portugal";
 choices[55][2] = "Las alternativas a) y b) son correctas";
 choices[55][3] = "Ninguno";
 answers[55] = 1;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 182. Uni&oacute;n Europea";
 preguntaids[55] = 182


//  Id pregunta: 1020 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[56]= new Array();
 choices[56][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[56][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[56][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[56][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[56] = 1;
 units[56] = ['4', '7', '8', '9'];
 blocks[56] = ['A1', 'A2'];
 comments[56] = "Id Pregunta: 1020. Ley 40/2015";
 preguntaids[56] = 1020


//  Id pregunta: 4368 Año de creación de pregunta: 2004
 questions[57]= "58)  El protocolo IPv6 define un campo de direcciones de:";
 choices[57]= new Array();
 choices[57][0] = "32 bits";
 choices[57][1] = "64 bits";
 choices[57][2] = "128 bits";
 choices[57][3] = "ninguna de las anteriores";
 answers[57] = 2;
 units[57] = ['109'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4368. ";
 preguntaids[57] = 4368


//  Id pregunta: 4862 Año de creación de pregunta: 2002
 questions[58]= "59)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[58][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[58][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[58][3] = "limitaciones de la distancia a cubrir";
 answers[58] = 1;
 units[58] = ['102'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4862. ";
 preguntaids[58] = 4862


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[59]= new Array();
 choices[59][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado";
 choices[59][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[59][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[59][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[59] = 2;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 244. Ley 39/2015";
 preguntaids[59] = 244


//  Id pregunta: 1590 Año de creación de pregunta: 2016
 questions[60]= "61)  El modelo entidad/relaci&oacute;n est&aacute; formado por:";
 choices[60]= new Array();
 choices[60][0] = "Clases, objetos e instancias.";
 choices[60][1] = "Variables y m&eacute;todos.";
 choices[60][2] = "Entidades, atributos y relaciones.";
 choices[60][3] = "Entidades. Objetos y clases.";
 answers[60] = 2;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1590. ";
 preguntaids[60] = 1590


//  Id pregunta: 6321 Año de creación de pregunta: 2003
 questions[61]= "62)  Se&ntilde;ale la falsa:";
 choices[61]= new Array();
 choices[61][0] = "Las m&eacute;tricas de complejidad intentan principalmente evaluar la posible mantenibilidad del software.";
 choices[61][1] = "Las t&eacute;cnicas de Halstead y McCabe se engloban dentro de estas m&eacute;tricas.";
 choices[61][2] = "La complejidad ciclom&aacute;tica de McCabe es una medida cualitativa de la complejidad l&oacute;gica de un programa";
 choices[61][3] = "La t&eacute;cnica de Halstead define los token, como la unidad sint&aacute;ctica m&aacute;s elemental distinguible por un compilador.";
 answers[61] = 2;
 units[61] = ['93'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 6321. ";
 preguntaids[61] = 6321


//  Id pregunta: 8424 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[62]= new Array();
 choices[62][0] = "Ley 18/2011";
 choices[62][1] = "Ley 39/2015";
 choices[62][2] = "Las dos anteriores";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 1;
 units[62] = ['7'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 8424. ";
 preguntaids[62] = 8424


//  Id pregunta: 7364 Año de creación de pregunta: 2010
 questions[63]= "64)  La copia de seguridad incremental en Linux:";
 choices[63]= new Array();
 choices[63][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[63][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[63][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[63][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[63] = 0;
 units[63] = ['57'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 7364. Examen TIC B 2009";
 preguntaids[63] = 7364


//  Id pregunta: 9589 Año de creación de pregunta: 2014
 questions[64]= "65)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[64]= new Array();
 choices[64][0] = "Los ficheros abiertos.";
 choices[64][1] = "El escritorio.";
 choices[64][2] = "Los procesos.";
 choices[64][3] = "Los puertos TCP/IP.";
 answers[64] = 2;
 units[64] = ['57'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 9589. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[64] = 9589


//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[65]= "66)  Acerca de las Autoridades de sellado de tiempo:";
 choices[65]= new Array();
 choices[65][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[65][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[65][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[65][3] = "Ninguna de las anteriores es correcta.";
 answers[65] = 1;
 units[65] = ['78'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[65] = 6868


//  Id pregunta: 3778 Año de creación de pregunta: 2002
 questions[66]= "67)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[66]= new Array();
 choices[66][0] = "Modelo de referencia";
 choices[66][1] = "Perfil de riesgos";
 choices[66][2] = "Foco de inter&eacute;s";
 choices[66][3] = "Establecimiento de la tipolog&iacute;a";
 answers[66] = 3;
 units[66] = ['93'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3778. ";
 preguntaids[66] = 3778


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[67]= "68)  La estructura econ&oacute;mica espa&ntilde;ola es aproximadamente la siguiente:";
 choices[67]= new Array();
 choices[67][0] = "Sector primario (5-10%) Sector industrial(25-30%) Sector servicios(60-65%)";
 choices[67][1] = "Sector primario (3-5%) Sector industrial(15-20%) Sector servicios(65-75%)";
 choices[67][2] = "Sector primario (10-15%) Sector industrial(15-20%) Sector servicios(50-60%)";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = 1;
 units[67] = ['12'];
 blocks[67] = ['A3'];
 comments[67] = "Id Pregunta: 350. Modelo econ&oacute;mico";
 preguntaids[67] = 350


//  Id pregunta: 4972 Año de creación de pregunta: 2002
 questions[68]= "69)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[68]= new Array();
 choices[68][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[68][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[68][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[68][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[68] = 3;
 units[68] = ['105'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 4972. ";
 preguntaids[68] = 4972


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[69]= "70)  La Administraci&oacute;n General del Estado se organiza:";
 choices[69]= new Array();
 choices[69][0] = "en Ministerios";
 choices[69][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[69][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[69][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[69] = 1;
 units[69] = ['4', '7', '8', '9'];
 blocks[69] = ['A1', 'A2'];
 comments[69] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[69] = 998


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[70]= new Array();
 choices[70][0] = "Indirecta.";
 choices[70][1] = "Directa.";
 choices[70][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[70][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[70] = 1;
 units[70] = ['14'];
 blocks[70] = ['A3'];
 comments[70] = "Id Pregunta: 370. Pol&iacute;ticas de igualdad";
 preguntaids[70] = 370


//  Id pregunta: 10272 Año de creación de pregunta: 2015
 questions[71]= "72)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[71]= new Array();
 choices[71][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[71][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[71][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[71][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[71] = 0;
 units[71] = ['101'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10272. Acuerdos internos (OLA) se realizan entre grupos de una misma organizaci&oacute;n";
 preguntaids[71] = 10272


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[72]= "73)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[72]= new Array();
 choices[72][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[72][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[72][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[72][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[72] = 1;
 units[72] = ['7'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 7705. Map 2007";
 preguntaids[72] = 7705


//  Id pregunta: 6339 Año de creación de pregunta: 2003
 questions[73]= "74)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[73]= new Array();
 choices[73][0] = "las frecuencias usadas";
 choices[73][1] = "los adaptadores usados";
 choices[73][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[73][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[73] = 2;
 units[73] = ['99'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 6339. ";
 preguntaids[73] = 6339


//  Id pregunta: 7184 Año de creación de pregunta: 2010
 questions[74]= "75)  Seg&uacute;n M&eacute;trica V3 las pruebas de seguridad, rendimiento y operaci&oacute;n se encuentran englobadas dentro del conjunto de pruebas de:";
 choices[74]= new Array();
 choices[74][0] = "Aceptaci&oacute;n";
 choices[74][1] = "Regresi&oacute;n";
 choices[74][2] = "Integraci&oacute;n";
 choices[74][3] = "Implantaci&oacute;n";
 answers[74] = 3;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7184. Castilla La Mancha 2009";
 preguntaids[74] = 7184


