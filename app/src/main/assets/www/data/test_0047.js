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
//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[0]= "1)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[0]= new Array();
 choices[0][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[0][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[0][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[0][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[0] = 2;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[0] = 18


//  Id pregunta: 8943 Año de creación de pregunta: 2013
 questions[1]= "2)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[1]= new Array();
 choices[1][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[1][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[1][2] = "Se ejecutan en un componente independiente del navegador";
 choices[1][3] = "Todas las anteriores son ciertas";
 answers[1] = 3;
 units[1] = ['62'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8943. ";
 preguntaids[1] = 8943


//  Id pregunta: 2432 Año de creación de pregunta: 2006
 questions[2]= "3)  Respecto a los m&eacute;todos del Payback, VAN y TIR, la respuesta correcta es:";
 choices[2]= new Array();
 choices[2][0] = "El m&eacute;todo del Payback sirve para determinar la rentabilidad exigida a una inversi&oacute;n.";
 choices[2][1] = "Los m&eacute;todos del VAN y el TIR siempre conducen a resultados coincidentes.";
 choices[2][2] = "Los m&eacute;todos del Payback y el VAN son similares (comparan los flujos de caja con la inversi&oacute;n inicial), pero el Payback no tiene en cuenta el cambio del valor del dinero con el tiempo y el VAN s&iacute;.";
 choices[2][3] = "El criterio de rentabilidad del TIR es: rentabilidad exigida &gt; TIR =&gt; inversi&oacute;n rentable.";
 answers[2] = 2;
 units[2] = ['40'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2432. ";
 preguntaids[2] = 2432


//  Id pregunta: 2172 Año de creación de pregunta: 2002
 questions[3]= "4)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:";
 choices[3]= new Array();
 choices[3][0] = "No existe";
 choices[3][1] = "Supone la base de un servidor de base de datos";
 choices[3][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[3][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[3] = 2;
 units[3] = ['43'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2172. ";
 preguntaids[3] = 2172


//  Id pregunta: 1965 Año de creación de pregunta: 2016
 questions[4]= "5)  EI control interno en las organizaciones consiste en un proceso de observaci&oacute;n y medida que puede clasificarse atendiendo a diferentes caracter&iacute;sticas. &iquest;Cu&aacute;l de las siguientes NO pertenece a los controles clasificados por su frecuencia?";
 choices[4]= new Array();
 choices[4][0] = "Continuo.";
 choices[4][1] = "Concurrente o concomitante.";
 choices[4][2] = "Peri&oacute;dico.";
 choices[4][3] = "Espor&aacute;dico.";
 answers[4] = 1;
 units[4] = ['101'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 1965. ";
 preguntaids[4] = 1965


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[5]= "6)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[5]= new Array();
 choices[5][0] = "Polimorfismo.";
 choices[5][1] = "Herencia.";
 choices[5][2] = "Reusabilidad.";
 choices[5][3] = "Encapsulaci&oacute;n.";
 answers[5] = 3;
 units[5] = ['85'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 7669. Map 2007";
 preguntaids[5] = 7669


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[6]= new Array();
 choices[6][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[6][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[6][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[6][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[6] = 1;
 units[6] = ['7'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 252. Ley 39/2015";
 preguntaids[6] = 252


//  Id pregunta: 10830 Año de creación de pregunta: 2015
 questions[7]= "8)  Indique cu&aacute;l no es un principio de la norma ISO 9004";
 choices[7]= new Array();
 choices[7][0] = "Enfoque de sistema para la gesti&oacute;n";
 choices[7][1] = "Enfoque basado en procesos";
 choices[7][2] = "Enfoque al cliente";
 choices[7][3] = "Enfoque al proveedor";
 answers[7] = 3;
 units[7] = ['98'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10830. ";
 preguntaids[7] = 10830


//  Id pregunta: 5436 Año de creación de pregunta: 2007
 questions[8]= "9)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[8]= new Array();
 choices[8][0] = "115.26.13.4";
 choices[8][1] = "255.3.4.5";
 choices[8][2] = "10.0.0.1";
 choices[8][3] = "0.0.0.3";
 answers[8] = 1;
 units[8] = ['109'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 5436. ";
 preguntaids[8] = 5436


//  Id pregunta: 7173 Año de creación de pregunta: 2010
 questions[9]= "10)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[9]= new Array();
 choices[9][0] = "SAAJ";
 choices[9][1] = "JAXR";
 choices[9][2] = "SOAP";
 choices[9][3] = "StAX";
 answers[9] = 1;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 7173. Castilla La Mancha 2009";
 preguntaids[9] = 7173


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[10]= "11)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[10]= new Array();
 choices[10][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[10][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[10][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[10][3] = "las respuestas 'a' y 'b' son correctas";
 answers[10] = 0;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 2474. ";
 preguntaids[10] = 2474


//  Id pregunta: 1264 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[11]= new Array();
 choices[11][0] = "Control.";
 choices[11][1] = "Transacci&oacute;n.";
 choices[11][2] = "Mecanismo.";
 choices[11][3] = "Entrada.";
 answers[11] = 1;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1264. ";
 preguntaids[11] = 1264


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[12]= "13)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[12]= new Array();
 choices[12][0] = "786 Diputados como m&aacute;ximo.";
 choices[12][1] = "600 Diputados como m&aacute;ximo.";
 choices[12][2] = "650 Diputados como m&aacute;ximo.";
 choices[12][3] = "732 Diputados como m&aacute;ximo.";
 answers[12] = 0;
 units[12] = ['5'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 183. Uni&oacute;n Europea";
 preguntaids[12] = 183


//  Id pregunta: 4495 Año de creación de pregunta: 2002
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[13]= new Array();
 choices[13][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[13][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[13][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[13][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[13] = 1;
 units[13] = ['105'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4495. ";
 preguntaids[13] = 4495


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[14]= "15)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado";
 choices[14]= new Array();
 choices[14][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[14][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[14][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[14][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[14] = 2;
 units[14] = ['22'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 501. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[14] = 501


//  Id pregunta: 6594 Año de creación de pregunta: 2009
 questions[15]= "16)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[15]= new Array();
 choices[15][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[15][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[15][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[15][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[15] = 1;
 units[15] = ['74'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6594. MAP 2008 A2";
 preguntaids[15] = 6594


//  Id pregunta: 5563 Año de creación de pregunta: 2007
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[16]= new Array();
 choices[16][0] = "Mantenimiento correctivo.";
 choices[16][1] = "Mantenimiento preventivo.";
 choices[16][2] = "Mantenimiento perfectivo.";
 choices[16][3] = "Mantenimiento adaptativo.";
 answers[16] = 1;
 units[16] = ['30'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 5563. ";
 preguntaids[16] = 5563


//  Id pregunta: 6277 Año de creación de pregunta: 2007
 questions[17]= "18)  Cu&aacute;l de los siguientes productos no se obtiene en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n orientado a objetos";
 choices[17]= new Array();
 choices[17][0] = "Dise&ntilde;o de la Interfaz de usuario";
 choices[17][1] = "Modelos de Clases de Dise&ntilde;o";
 choices[17][2] = "Dise&ntilde;o de la Arquitectura Modular e Interfaz de Usuario";
 choices[17][3] = "Especificaciones de Implantaci&oacute;n";
 answers[17] = 2;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6277. ";
 preguntaids[17] = 6277


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[18]= "19)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[18]= new Array();
 choices[18][0] = "T&iacute;tulo I";
 choices[18][1] = "T&iacute;tulo II";
 choices[18][2] = "T&iacute;tulo III";
 choices[18][3] = "T&iacute;tulo IV";
 answers[18] = 1;
 units[18] = ['7', '19'];
 blocks[18] = ['A2', 'A4'];
 comments[18] = "Id Pregunta: 9889. ";
 preguntaids[18] = 9889


//  Id pregunta: 8628 Año de creación de pregunta: 2013
 questions[19]= "20)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[19]= new Array();
 choices[19][0] = "PAM";
 choices[19][1] = "PBM";
 choices[19][2] = "PGM";
 choices[19][3] = "PPM";
 answers[19] = 0;
 units[19] = ['80'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8628. ";
 preguntaids[19] = 8628


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[20]= "21)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[20]= new Array();
 choices[20][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[20][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[20][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[20][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[20] = 1;
 units[20] = ['22'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 512. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[20] = 512


//  Id pregunta: 9888 Año de creación de pregunta: 2015
 questions[21]= "22)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[21]= new Array();
 choices[21][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[21][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[21][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[21][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[21] = 1;
 units[21] = ['7', '19'];
 blocks[21] = ['A2', 'A4'];
 comments[21] = "Id Pregunta: 9888. ";
 preguntaids[21] = 9888


//  Id pregunta: 9519 Año de creación de pregunta: 2014
 questions[22]= "23)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[22]= new Array();
 choices[22][0] = "sendError(int errorCode) de HttpServlet";
 choices[22][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[22][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[22][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[22] = 2;
 units[22] = ['64'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 9519. ";
 preguntaids[22] = 9519


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[23]= "24)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[23]= new Array();
 choices[23][0] = "un art&iacute;culo";
 choices[23][1] = "dos art&iacute;culos";
 choices[23][2] = "tres art&iacute;culos";
 choices[23][3] = "cuatro art&iacute;culos";
 answers[23] = 1;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 219. Ley 39/2015";
 preguntaids[23] = 219


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[24]= new Array();
 choices[24][0] = "las Cortes generales.";
 choices[24][1] = "los partidos pol&iacute;ticos.";
 choices[24][2] = "los sindicatos.";
 choices[24][3] = "las Comunidades Aut&oacute;nomas.";
 answers[24] = 1;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 52. Constituci&oacute;n de 1978";
 preguntaids[24] = 52


//  Id pregunta: 5688 Año de creación de pregunta: 2007
 questions[25]= "26)  En el caso de un dise&ntilde;o orientado a objetos, &iquest;se debe tener en cuenta la actividad DSI 6: DISE&Ntilde;O FISICO DE DATOS, seg&uacute;n m&eacute;trica V3?";
 choices[25]= new Array();
 choices[25][0] = "S&iacute; se debe tener en cuenta.";
 choices[25][1] = "No se aplica esta actividad.";
 choices[25][2] = "Se aplica esta actividad en funci&oacute;n de la arquitectura.";
 choices[25][3] = "Se aplica esta actividad en funci&oacute;n del gestor de base de datos.";
 answers[25] = 0;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 5688. ";
 preguntaids[25] = 5688


//  Id pregunta: 2511 Año de creación de pregunta: 2004
 questions[26]= "27)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[26]= new Array();
 choices[26][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[26][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[26][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[26][3] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[26] = 2;
 units[26] = ['60'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2511. Examen TIC MAP B 2004";
 preguntaids[26] = 2511


//  Id pregunta: 2505 Año de creación de pregunta: 2004
 questions[27]= "28)  En el estudio te&oacute;rico de las Estructuras de Datos, el conocido como &quot;m&eacute;todo de la baraja&quot; responde a un algoritmo de:";
 choices[27]= new Array();
 choices[27][0] = "B&uacute;squeda";
 choices[27][1] = "Ordenaci&oacute;n";
 choices[27][2] = "Iteraci&oacute;n";
 choices[27][3] = "Recursi&oacute;n";
 answers[27] = 1;
 units[27] = ['60'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 2505. Examen TIC MAP B 2004";
 preguntaids[27] = 2505


//  Id pregunta: 6818 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[28]= new Array();
 choices[28][0] = "Oracle Identity Management";
 choices[28][1] = "BMC Remedy Action Request System";
 choices[28][2] = "IBM Tivoli Identity Manager";
 choices[28][3] = "Novell Nsure";
 answers[28] = 1;
 units[28] = ['123'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6818. ";
 preguntaids[28] = 6818


//  Id pregunta: 8383 Año de creación de pregunta: 2011
 questions[29]= "30)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[29]= new Array();
 choices[29][0] = "Paquete";
 choices[29][1] = "SPDU";
 choices[29][2] = "Trama";
 choices[29][3] = "TPDU";
 answers[29] = 0;
 units[29] = ['105'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8383. ";
 preguntaids[29] = 8383


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[30]= new Array();
 choices[30][0] = "A los ministros.";
 choices[30][1] = "Las respuestas a) y b) son correctas.";
 choices[30][2] = "Las respuestas a) y b) no son correctas.";
 choices[30][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[30] = 1;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 279. Presupuestos generales";
 preguntaids[30] = 279


//  Id pregunta: 7862 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[31]= new Array();
 choices[31][0] = "Exclusivamente el sistema ETRS89.";
 choices[31][1] = "Los sistemas ED50 y ETRS89.";
 choices[31][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[31][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[31] = 2;
 units[31] = ['71'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7862. Examen TIC A1 2010";
 preguntaids[31] = 7862


//  Id pregunta: 10304 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no se utiliza para el control de la legalidad del software?";
 choices[32]= new Array();
 choices[32][0] = "Watermarking";
 choices[32][1] = "Huella digital";
 choices[32][2] = "Kerberos";
 choices[32][3] = "Windows Media Right Manager System";
 answers[32] = 2;
 units[32] = ['41'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 10304. Kerberos es un sistema de federaci&oacute;n de identidades";
 preguntaids[32] = 10304


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[33]= "34)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[33]= new Array();
 choices[33][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[33][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[33][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[33][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[33] = 0;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[33] = 254


//  Id pregunta: 6361 Año de creación de pregunta: 2003
 questions[34]= "35)  Defina Throughput";
 choices[34]= new Array();
 choices[34][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[34][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[34][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajos por hora o transacciones por segundo)";
 choices[34][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 answers[34] = 0;
 units[34] = ['45'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 6361. Examen 2006 JCYL";
 preguntaids[34] = 6361


//  Id pregunta: 2206 Año de creación de pregunta: 2009
 questions[35]= "36)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[35]= new Array();
 choices[35][0] = "Ministerio de Justicia";
 choices[35][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[35][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[35][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[35] = 3;
 units[35] = ['35'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2206. ";
 preguntaids[35] = 2206


//  Id pregunta: 8982 Año de creación de pregunta: 2013
 questions[36]= "37)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[36]= new Array();
 choices[36][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[36][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[36][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[36][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[36] = 0;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 8982. Ley 59/2003, art&iacute;culo 33";
 preguntaids[36] = 8982


//  Id pregunta: 3994 Año de creación de pregunta: 2002
 questions[37]= "38)  En procesamiento de la voz, el nivel de comprensi&oacute;n en el cu&aacute;l se identifican los objetos sonoros elementales se llama:";
 choices[37]= new Array();
 choices[37][0] = "Nivel ac&uacute;stico";
 choices[37][1] = "Nivel fon&eacute;tico";
 choices[37][2] = "Nivel fonol&oacute;gico";
 choices[37][3] = "Nivel pros&oacute;dico";
 answers[37] = 1;
 units[37] = ['81'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3994. ";
 preguntaids[37] = 3994


//  Id pregunta: 4276 Año de creación de pregunta: 2006
 questions[38]= "39)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n se basa en la observaci&oacute;n de las frecuencias de aparici&oacute;n de t&eacute;rminos?";
 choices[38]= new Array();
 choices[38][0] = "l&oacute;gica borrosa";
 choices[38][1] = "modelos probabil&iacute;sticos";
 choices[38][2] = "modelos vectoriales";
 choices[38][3] = "lenguaje natural";
 answers[38] = 2;
 units[38] = ['100'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4276. ";
 preguntaids[38] = 4276


//  Id pregunta: 1444 Año de creación de pregunta: 2016
 questions[39]= "40)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal de las Fuerzas Armadas, seg&uacute;n la LOPD art&iacute;culo 2:";
 choices[39]= new Array();
 choices[39][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, se regir&aacute;n exclusivamente por el Real decreto 1720/2007.";
 choices[39][1] = "Caen dentro del &aacute;mbito de la Constituci&oacute;n.";
 choices[39][2] = "Caen dentro de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[39][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas, y por lo especialmente previsto, en su caso, por la LOPD.";
 answers[39] = 3;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 1444. ";
 preguntaids[39] = 1444


//  Id pregunta: 10964 Año de creación de pregunta: 2015
 questions[40]= "41)  &iquest;Es siempre necesario acudir a una nueva licitaci&oacute;n para adjudicar los contratos basados en un acuerdo marco?";
 choices[40]= new Array();
 choices[40][0] = "No, solo cuando no todos los t&eacute;rminos del acuerdo est&aacute;n definidos";
 choices[40][1] = "S&iacute;, siempre se debe acudir a una nueva licitaci&oacute;n";
 choices[40][2] = "La ley proh&iacute;be expresamente acudir a una nueva licitaci&oacute;n";
 choices[40][3] = "Depende de lo que establezca el pliego del acuerdo marco";
 answers[40] = 0;
 units[40] = ['37'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 10964. ";
 preguntaids[40] = 10964


//  Id pregunta: 6559 Año de creación de pregunta: 2003
 questions[41]= "42)  Indique la respuesta incorrecta respecto a GIS modelo de datos vectorial.";
 choices[41]= new Array();
 choices[41][0] = "La caracter&iacute;stica mas importante del modelo vectorial frente al r&aacute;ster es la capacidad de gestion topol&oacute;gica de sus elementos.";
 choices[41][1] = "La mayor riqueza y capacidad de representaci&oacute;n de la realidad espacial, se traduce en una mayor complejidad de este modelo vectorial en comparaci&oacute;n con el sencillo modelo r&aacute;ster.";
 choices[41][2] = "En el modelo de datos vectorial podemos hablar por tanto de una georreferenciaci&oacute;n continua, sin que la resoluci&oacute;n suponga una limitaci&oacute;n como suced&iacute;a en el modelo r&aacute;ster.";
 choices[41][3] = "Ninguna de las anteriores.";
 answers[41] = 3;
 units[41] = ['71'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 6559. ";
 preguntaids[41] = 6559


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[42]= new Array();
 choices[42][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[42][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[42][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[42][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[42] = 0;
 units[42] = ['14'];
 blocks[42] = ['A3'];
 comments[42] = "Id Pregunta: 373. Pol&iacute;ticas de igualdad";
 preguntaids[42] = 373


//  Id pregunta: 4384 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[43]= new Array();
 choices[43][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[43][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[43][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[43][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[43] = 3;
 units[43] = ['119'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4384. Examen TAI 2004";
 preguntaids[43] = 4384


//  Id pregunta: 4291 Año de creación de pregunta: 2002
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[44]= new Array();
 choices[44][0] = "MAGERIT es un &oacute;rgano encargado de establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[44][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[44][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[44][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[44] = 0;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 4291. ";
 preguntaids[44] = 4291


//  Id pregunta: 1953 Año de creación de pregunta: 2016
 questions[45]= "46)  Cu&aacute;l de los siguientes NO es un componente principal de un diagrama de flujo de datos o DFD:";
 choices[45]= new Array();
 choices[45][0] = "Entidad Interna.";
 choices[45][1] = "Flujo.";
 choices[45][2] = "Proceso.";
 choices[45][3] = "Almac&eacute;n de datos.";
 answers[45] = 0;
 units[45] = ['86'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 1953. ";
 preguntaids[45] = 1953


//  Id pregunta: 5207 Año de creación de pregunta: 2006
 questions[46]= "47)  La t&eacute;cnica NAT no permite:";
 choices[46]= new Array();
 choices[46][0] = "Implementar una pasarela FTP.";
 choices[46][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[46][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[46][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[46] = 0;
 units[46] = ['102'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5207. ";
 preguntaids[46] = 5207


//  Id pregunta: 5161 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;Qu&eacute; influy&oacute; en el origen de XML?";
 choices[47]= new Array();
 choices[47][0] = "SGML y SOAP";
 choices[47][1] = "SGML";
 choices[47][2] = "SGML y HTTP";
 choices[47][3] = "http y SGML";
 answers[47] = 1;
 units[47] = ['107'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5161. ";
 preguntaids[47] = 5161


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[48]= "49)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[48]= new Array();
 choices[48][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[48][1] = "Las comunicaciones comerciales";
 choices[48][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[48][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[48] = 0;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[48] = 5917


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[49]= "50)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[49]= new Array();
 choices[49][0] = "180 art&iacute;culos.";
 choices[49][1] = "182 art&iacute;culos.";
 choices[49][2] = "185 art&iacute;culos.";
 choices[49][3] = "190 art&iacute;culos.";
 answers[49] = 1;
 units[49] = ['11'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 301. Presupuestos generales";
 preguntaids[49] = 301


//  Id pregunta: 4896 Año de creación de pregunta: 2002
 questions[50]= "51)  La linea &quot;GET / HTTP/1.1&quot;, dentro de un mensaje HTTP significa:";
 choices[50]= new Array();
 choices[50][0] = "Pide un documento localizado en /";
 choices[50][1] = "La versi&oacute;n HTTP es 1.1";
 choices[50][2] = "No tiene indicaci&oacute;n del servidor";
 choices[50][3] = "Todas las anteriores respuestas son correctas";
 answers[50] = 3;
 units[50] = ['103'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4896. ";
 preguntaids[50] = 4896


//  Id pregunta: 6627 Año de creación de pregunta: 2009
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[51]= new Array();
 choices[51][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[51][1] = "Un Senador propuesto por el Senado";
 choices[51][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[51][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[51] = 2;
 units[51] = ['35'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 6627. ";
 preguntaids[51] = 6627


//  Id pregunta: 7680 Año de creación de pregunta: 2010
 questions[52]= "53)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[52]= new Array();
 choices[52][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual.";
 choices[52][1] = "Un p&aacute;gina web accesible debe contener solo texto.";
 choices[52][2] = "Una p&aacute;gina web accesible no debe utilizar colores.";
 choices[52][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as.";
 answers[52] = 0;
 units[52] = ['42'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 7680. Map 2007";
 preguntaids[52] = 7680


//  Id pregunta: 10196 Año de creación de pregunta: 2015
 questions[53]= "54)  En el &aacute;mbito de la ciberseguridad, respecto de las APT (Advanced Persistent Threats), se&ntilde;ale la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Una APT comprende distintas fases entre las que se encuentra la extracci&oacute;n de datos.";
 choices[53][1] = "Una APT no utiliza t&eacute;cnicas de ingenier&iacute;a social para lograr el acceso al sistema objetivo.";
 choices[53][2] = "Una APT es un conjunto de software malicioso con poca repercusi&oacute;n en el sistema objetivo y de f&aacute;cil detecci&oacute;n por las herramientas antivirus.";
 choices[53][3] = "Una APT consiste en ataques avanzados pr&oacute;ximos en el tiempo hacia objetivos generales e impersonales.";
 answers[53] = 0;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 10196. Examen TIC A1 2014";
 preguntaids[53] = 10196


//  Id pregunta: 9531 Año de creación de pregunta: 2014
 questions[54]= "55)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[54]= new Array();
 choices[54][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[54][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[54][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[54][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[54] = 1;
 units[54] = ['64'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 9531. ";
 preguntaids[54] = 9531


//  Id pregunta: 7012 Año de creación de pregunta: 2010
 questions[55]= "56)  Cual de los siguientes enunciados no pertenece al c&oacute;digo &eacute;tico definido para los perfiles de auditor por la ISACA.";
 choices[55]= new Array();
 choices[55][0] = "Apoyar la implantaci&oacute;n y estimular el cumplimiento de est&aacute;ndares, procedimientos y controles apropiados en los sistemas de informaci&oacute;n.";
 choices[55][1] = "Mantener la protecci&oacute;n de la intimidad y la confidencialidad de la informaci&oacute;n a la que se tenga  acceso, dentro del marco de la Directiva Europea en materia de protecci&oacute;n de datos de car&aacute;cter personal (transpuesta en Espa&ntilde;a a trav&eacute;s de la Ley Org&aacute;nica 15/1999).";
 choices[55][2] = "Apoyar la formaci&oacute;n profesional de las partes leg&iacute;timamente interesadas, mejorando su comprensi&oacute;n de la seguridad y control de los sistemas de informaci&oacute;n.";
 choices[55][3] = "Informar a las partes apropiadas de los resultados del trabajo realizado, revelando todos los hechos significativos que obren en su conocimiento.";
 answers[55] = 1;
 units[55] = ['36'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7012. ";
 preguntaids[55] = 7012


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[56]= new Array();
 choices[56][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[56][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[56][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[56][3] = "Todos los anteriores";
 answers[56] = 3;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 467. Estrategia TIC";
 preguntaids[56] = 467


//  Id pregunta: 2459 Año de creación de pregunta: 2006
 questions[57]= "58)  En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[57]= new Array();
 choices[57][0] = "De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado";
 choices[57][1] = "El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os";
 choices[57][2] = "En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido";
 choices[57][3] = "El responsable de seguridad competente se encargar&aacute; de revisar peri&oacute;dicamente la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados al menos una vez al mes";
 answers[57] = 0;
 units[57] = ['35'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2459. ";
 preguntaids[57] = 2459


//  Id pregunta: 6541 Año de creación de pregunta: 2003
 questions[58]= "59)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[58]= new Array();
 choices[58][0] = "nivel b&aacute;sico";
 choices[58][1] = "nivel medio";
 choices[58][2] = "nivel alto";
 choices[58][3] = "En ningun caso";
 answers[58] = 2;
 units[58] = ['35'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 6541. ";
 preguntaids[58] = 6541


//  Id pregunta: 1326 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[59]= new Array();
 choices[59][0] = "La persistencia.";
 choices[59][1] = "Los procesos de transformaci&oacute;n.";
 choices[59][2] = "EI flujo de la informaci&oacute;n.";
 choices[59][3] = "La herencia.";
 answers[59] = 3;
 units[59] = ['86'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 1326. ";
 preguntaids[59] = 1326


//  Id pregunta: 1970 Año de creación de pregunta: 2016
 questions[60]= "61)  Se consideran interesados en el procedimiento administrativo:";
 choices[60]= new Array();
 choices[60][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos y aquellos que, sin haber iniciado el procedimiento tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[60][1] = "Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales, en todo caso.";
 choices[60][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento, en todo caso, antes del tr&aacute;mite de audiencia.";
 choices[60][3] = "A Y C son verdaderas";
 answers[60] = 0;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 1970. ";
 preguntaids[60] = 1970


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[61]= new Array();
 choices[61][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[61][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[61][2] = "Todas son correctas.";
 choices[61][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[61] = 2;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 150. Uni&oacute;n Europea";
 preguntaids[61] = 150


//  Id pregunta: 2604 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones se ajusta m&aacute;s a la definici&oacute;n de MIPS?:";
 choices[62]= new Array();
 choices[62][0] = "Expresa la capacidad de ejecuci&oacute;n de instrucciones de una m&aacute;quina";
 choices[62][1] = "Expresa la velocidad de ejecuci&oacute;n en miles de intrucciones por segundo";
 choices[62][2] = "Expresa la potencia de c&aacute;lculo cient&iacute;fico de un computador";
 choices[62][3] = "Expresa la potencia de c&aacute;lculo de generaci&oacute;n de gr&aacute;ficos";
 answers[62] = 0;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2604. ";
 preguntaids[62] = 2604


//  Id pregunta: 7177 Año de creación de pregunta: 2010
 questions[63]= "64)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[63]= new Array();
 choices[63][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[63][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[63][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[63][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[63] = 3;
 units[63] = ['19'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 7177. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";
 preguntaids[63] = 7177


//  Id pregunta: 1259 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[64]= new Array();
 choices[64][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[64][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[64][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[64][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[64] = 0;
 units[64] = ['14'];
 blocks[64] = ['A3'];
 comments[64] = "Id Pregunta: 1259. ";
 preguntaids[64] = 1259


//  Id pregunta: 2047 Año de creación de pregunta: 2002
 questions[65]= "66)  &iquest;Qu&eacute; par&aacute;metro no interviene directamente en evaluar el rendimiento de un sistema?:";
 choices[65]= new Array();
 choices[65][0] = "Tiempo de respuesta";
 choices[65][1] = "Productividad o throughput";
 choices[65][2] = "Tipo de procesador";
 choices[65][3] = "Tasa de utilizaci&oacute;n de CPU";
 answers[65] = 2;
 units[65] = ['39'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2047. ";
 preguntaids[65] = 2047


//  Id pregunta: 1656 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[66]= new Array();
 choices[66][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[66][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[66][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[66][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno";
 answers[66] = 2;
 units[66] = ['1'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 1656. ";
 preguntaids[66] = 1656


//  Id pregunta: 971 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[67][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[67][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[67][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[67] = 2;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 971. Ley 40/2015";
 preguntaids[67] = 971


//  Id pregunta: 3579 Año de creación de pregunta: 2004
 questions[68]= "69)  En el dise&ntilde;o Orientado a objetos, &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[68]= new Array();
 choices[68][0] = "Una clase es la implantaci&oacute;n de un tipo de objeto.";
 choices[68][1] = "La especificaci&oacute;n de c&oacute;mo se llevan a cabo las funciones de una clase se llama operaci&oacute;n.";
 choices[68][2] = "Una clase especifica la estructura de datos y los m&eacute;todos operativos permitidos que se aplican a cada uno de sus objetos.";
 choices[68][3] = "Una clase especifica la estructura de datos de cada uno de sus objetos y las operaciones que se utilizan para tener acceso a esos datos.";
 answers[68] = 1;
 units[68] = ['89'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3579. Pregunta TIC-B 2003";
 preguntaids[68] = 3579


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[69]= new Array();
 choices[69][0] = "Tres meses.";
 choices[69][1] = "Nueve meses.";
 choices[69][2] = "Cuatro meses.";
 choices[69][3] = "Seis meses.";
 answers[69] = 0;
 units[69] = ['11'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[69] = 285


//  Id pregunta: 8449 Año de creación de pregunta: 2011
 questions[70]= "71)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "Compiere";
 choices[70][1] = "Siebel";
 choices[70][2] = "Epiphany";
 choices[70][3] = "Todas son soluciones comerciales";
 answers[70] = 0;
 units[70] = ['69'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 8449. ";
 preguntaids[70] = 8449


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[71]= new Array();
 choices[71][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[71][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[71][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[71][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[71] = 0;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 41. Constituci&oacute;n de 1978";
 preguntaids[71] = 41


//  Id pregunta: 1526 Año de creación de pregunta: 2016
 questions[72]= "73)  Mediante un sistema criptogr&aacute;fico sim&eacute;trico, un usuario A (con claves p&uacute;blica Pa y privada Ka) desea comunicarse con otro usuario B (con claves p&uacute;blica Pb y privada Kb). &iquest;De qu&eacute; forma podr&iacute;a A enviarle un mensaje (M) a B de manera que s&oacute;lo pueda verlo B y garantizando que ha sido A el que lo ha enviado?";
 choices[72]= new Array();
 choices[72][0] = "Kb(Pa(M)).";
 choices[72][1] = "Pb(Ka(M)).";
 choices[72][2] = "Pb(M).";
 choices[72][3] = "Ka(M).";
 answers[72] = 1;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 1526. ";
 preguntaids[72] = 1526


//  Id pregunta: 3957 Año de creación de pregunta: 2002
 questions[73]= "74)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos si no han sido detectados una vez finalizado el proyecto?:";
 choices[73]= new Array();
 choices[73][0] = "Especificaci&oacute;n";
 choices[73][1] = "Dise&ntilde;o";
 choices[73][2] = "Codificaci&oacute;n";
 choices[73][3] = "Otros";
 answers[73] = 0;
 units[73] = ['92'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 3957. ";
 preguntaids[73] = 3957


//  Id pregunta: 7186 Año de creación de pregunta: 2010
 questions[74]= "75)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[74]= new Array();
 choices[74][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[74][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[74][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[74][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[74] = 1;
 units[74] = ['91'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7186. Castilla La Mancha 2009";
 preguntaids[74] = 7186


