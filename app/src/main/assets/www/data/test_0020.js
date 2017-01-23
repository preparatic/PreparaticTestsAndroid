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
//  Id pregunta: 10507 Año de creación de pregunta: 2015
 questions[0]= "1)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[0]= new Array();
 choices[0][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[0][1] = "En cada tarea debe haber un unico R y A";
 choices[0][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[0][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[0] = 1;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10507. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";
 preguntaids[0] = 10507


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[1]= new Array();
 choices[1][0] = "El rey, a propuesta del Gobierno.";
 choices[1][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[1][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[1][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[1] = 1;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[1] = 37


//  Id pregunta: 9901 Año de creación de pregunta: 2015
 questions[2]= "3)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[2]= new Array();
 choices[2][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[2][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[2][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[2][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local, Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[2] = 2;
 units[2] = ['7', '19'];
 blocks[2] = ['A2', 'A4'];
 comments[2] = "Id Pregunta: 9901. ";
 preguntaids[2] = 9901


//  Id pregunta: 1632 Año de creación de pregunta: 2016
 questions[3]= "4)  Para evaluar el comportamiento de un sistema es necesario disponer de una serie de medidas cuantitativas. La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Productividad.";
 choices[3][1] = "Capacidad.";
 choices[3][2] = "Overhead.";
 choices[3][3] = "Tiempo de respuesta.";
 answers[3] = 0;
 units[3] = ['39'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 1632. ";
 preguntaids[3] = 1632


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[4]= "5)  Si comparamos SSL y SET:";
 choices[4]= new Array();
 choices[4][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[4][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[4][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[4][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[4] = 0;
 units[4] = ['10', '75'];
 blocks[4] = ['A2', 'B2'];
 comments[4] = "Id Pregunta: 3056. ";
 preguntaids[4] = 3056


//  Id pregunta: 5905 Año de creación de pregunta: 2009
 questions[5]= "6)  Seg&uacute;n el RD 1720/2007, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &quot;Responsable del fichero o tratamiento&quot;?";
 choices[5]= new Array();
 choices[5][0] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[5][1] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. No podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[5][2] = "Persona jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[5][3] = "Persona f&iacute;sica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 answers[5] = 0;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 5905. ";
 preguntaids[5] = 5905


//  Id pregunta: 10675 Año de creación de pregunta: 2015
 questions[6]= "7)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[6]= new Array();
 choices[6][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[6][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[6][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[6][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[6] = 0;
 units[6] = ['22'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 10675. ";
 preguntaids[6] = 10675


//  Id pregunta: 3658 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[7]= new Array();
 choices[7][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[7][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[7][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[7][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[7] = 1;
 units[7] = ['84'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 3658. ";
 preguntaids[7] = 3658


//  Id pregunta: 9320 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[8]= new Array();
 choices[8][0] = "Ley 11/2007";
 choices[8][1] = "Real Decreto 1619/2012";
 choices[8][2] = "Ley 25/2013";
 choices[8][3] = "Real Decreto Legislativo 3/2011";
 answers[8] = 0;
 units[8] = ['10'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 9320. ";
 preguntaids[8] = 9320


//  Id pregunta: 2705 Año de creación de pregunta: 2002
 questions[9]= "10)  Con respecto a la manera de representar el modelo digital del terreno o DTM, un SIG puede ser:";
 choices[9]= new Array();
 choices[9][0] = "R&aacute;ster.";
 choices[9][1] = "Vectorial.";
 choices[9][2] = "Ambos.";
 choices[9][3] = "Ninguna es cierta.";
 answers[9] = 2;
 units[9] = ['71'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2705. ";
 preguntaids[9] = 2705


//  Id pregunta: 9028 Año de creación de pregunta: 2014
 questions[10]= "11)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[10]= new Array();
 choices[10][0] = "IP Address Management";
 choices[10][1] = "Internet Proccess Advanced Management";
 choices[10][2] = "IP Access Management";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = 0;
 units[10] = ['58'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 9028. ";
 preguntaids[10] = 9028


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[11]= new Array();
 choices[11][0] = "Un representante de la Administraci&oacute;n local.";
 choices[11][1] = "Un representante del Tribunal de Cuentas.";
 choices[11][2] = "Un representante del Defensor del Pueblo.";
 choices[11][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[11] = 0;
 units[11] = ['22'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 496. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[11] = 496


//  Id pregunta: 6166 Año de creación de pregunta: 2003
 questions[12]= "13)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[12]= new Array();
 choices[12][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[12][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[12][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[12][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[12] = 2;
 units[12] = ['77'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 6166. ";
 preguntaids[12] = 6166


//  Id pregunta: 10958 Año de creación de pregunta: 2015
 questions[13]= "14)  Las especificaciones t&eacute;cnicas de un pliego de prescripciones";
 choices[13]= new Array();
 choices[13][0] = "deben permitir descartar ciertas empresas o productos con los que no se han tenido buenas experiencias";
 choices[13][1] = "todas son falsas";
 choices[13][2] = "deben hacer referencia a la fabricaci&oacute;n o procedencia determinada del producto o servicio";
 choices[13][3] = "deben hacer referencia a la marca de mayor calidad del producto o servicio";
 answers[13] = 1;
 units[13] = ['37'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 10958. ";
 preguntaids[13] = 10958


//  Id pregunta: 953 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[14]= new Array();
 choices[14][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[14][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[14][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[14][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[14] = 1;
 units[14] = ['34', '84'];
 blocks[14] = ['B1', 'B3'];
 comments[14] = "Id Pregunta: 953. Metodologias &aacute;giles";
 preguntaids[14] = 953


//  Id pregunta: 1039 Año de creación de pregunta: 2016
 questions[15]= "16)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[15]= new Array();
 choices[15][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[15][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[15][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[15][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[15] = 2;
 units[15] = ['4', '7', '8', '9'];
 blocks[15] = ['A1', 'A2'];
 comments[15] = "Id Pregunta: 1039. Ley 40/2015";
 preguntaids[15] = 1039


//  Id pregunta: 3103 Año de creación de pregunta: 2002
 questions[16]= "17)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[16]= new Array();
 choices[16][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[16][1] = "No contiene claves dependientes de otra extranjera";
 choices[16][2] = "La clave extranjera est&aacute; normalizada";
 choices[16][3] = "No contiene grupos repetitivos";
 answers[16] = 3;
 units[16] = ['61'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 3103. ";
 preguntaids[16] = 3103


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[17]= "18)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[17]= new Array();
 choices[17][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[17][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[17][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[17][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[17] = 0;
 units[17] = ['45'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9777. ";
 preguntaids[17] = 9777


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[18]= new Array();
 choices[18][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[18][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[18][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[18][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[18] = 3;
 units[18] = ['11'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 276. Presupuestos generales";
 preguntaids[18] = 276


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[19]= "20)  La ayuda financiera solicitada por Espa&ntilde;a a la UE en 2012 ascendi&oacute; a:";
 choices[19]= new Array();
 choices[19][0] = "100.000 millones de euros";
 choices[19][1] = "10.000 millones de euros";
 choices[19][2] = "1 bill&oacute;n de euros";
 choices[19][3] = "50.000 millones de euros";
 answers[19] = 0;
 units[19] = ['12'];
 blocks[19] = ['A3'];
 comments[19] = "Id Pregunta: 349. Modelo econ&oacute;mico";
 preguntaids[19] = 349


//  Id pregunta: 3857 Año de creación de pregunta: 2002
 questions[20]= "21)  EXCELERATOR, SADT, TAGS..., son herramientas para:";
 choices[20]= new Array();
 choices[20][0] = "Confecci&oacute;n de prototipos";
 choices[20][1] = "An&aacute;lisis de requerimientos";
 choices[20][2] = "Auditor&iacute;a de Sistemas de Informaci&oacute;n";
 choices[20][3] = "Ninguna de las anteriores es cierta";
 answers[20] = 1;
 units[20] = ['84'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3857. ";
 preguntaids[20] = 3857


//  Id pregunta: 9515 Año de creación de pregunta: 2014
 questions[21]= "22)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[21]= new Array();
 choices[21][0] = "sleep(long msec);";
 choices[21][1] = "start();";
 choices[21][2] = "wait();";
 choices[21][3] = "A y B son correctas.";
 answers[21] = 3;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9515. ";
 preguntaids[21] = 9515


//  Id pregunta: 3912 Año de creación de pregunta: 2002
 questions[22]= "23)  La versi&oacute;n 3 de la metodolog&iacute;a M&eacute;trica:";
 choices[22]= new Array();
 choices[22][0] = "Cubre tanto desarrollos estructurados como desarrollos orientados a objetos";
 choices[22][1] = "Cubre exclusivamente desarrollos estructurados";
 choices[22][2] = "Cubre exclusivamente desarrollos orientados a objetos";
 choices[22][3] = "Cubre exclusivamente desarrollos orientados a entornos microinform&aacute;ticos";
 answers[22] = 0;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3912. ";
 preguntaids[22] = 3912


//  Id pregunta: 3823 Año de creación de pregunta: 2002
 questions[23]= "24)  En las fases del proceso de prueba de software diga cu&aacute;l, seg&uacute;n M&eacute;trica v3, corresponde a la prueba que se realiza una vez ensamblado el software para comprobar que cumple las especificaciones:";
 choices[23]= new Array();
 choices[23][0] = "Prueba de integraci&oacute;n";
 choices[23][1] = "Prueba de unidad";
 choices[23][2] = "Prueba de aceptaci&oacute;n";
 choices[23][3] = "Prueba de validaci&oacute;n";
 answers[23] = 2;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3823. ";
 preguntaids[23] = 3823


//  Id pregunta: 1963 Año de creación de pregunta: 2016
 questions[24]= "25)  Que afirmaci&oacute;n de las siguientes acerca de la auditoria inform&aacute;tica NO es correcta:";
 choices[24]= new Array();
 choices[24][0] = "Debe velar por la eficacia y eficiencia del sistema inform&aacute;tico.";
 choices[24][1] = "Debe verificar la calidad de los sistemas de informaci&oacute;n.";
 choices[24][2] = "Debe supervisar los mecanismos de control interno establecidos en los centros de proceso de datos.";
 choices[24][3] = "Debe ser realizada por una empresa externa.";
 answers[24] = 3;
 units[24] = ['36'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 1963. ";
 preguntaids[24] = 1963


//  Id pregunta: 5047 Año de creación de pregunta: 2002
 questions[25]= "26)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[25]= new Array();
 choices[25][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[25][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[25][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[25][3] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste puede utilizar, con un alto nivel de confianza, bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 answers[25] = 3;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 5047. Ley 25/2015. Disposici&oacute;n Final Cuarta. Modificaci&oacute;n de la Ley 59/2003";
 preguntaids[25] = 5047


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[26]= new Array();
 choices[26][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[26][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[26][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[26][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[26] = 2;
 units[26] = ['71'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 729. AGE A1 2015";
 preguntaids[26] = 729


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[27]= new Array();
 choices[27][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[27][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[27][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[27][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[27] = 0;
 units[27] = ['7'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 253. Ley 39/2015";
 preguntaids[27] = 253


//  Id pregunta: 2528 Año de creación de pregunta: 2004
 questions[28]= "29)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[28]= new Array();
 choices[28][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos";
 choices[28][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[28][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[28][3] = "Todas las anteriores";
 answers[28] = 2;
 units[28] = ['122'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 2528. ";
 preguntaids[28] = 2528


//  Id pregunta: 8138 Año de creación de pregunta: 2011
 questions[29]= "30)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[29]= new Array();
 choices[29][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[29][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[29][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[29][3] = "Son firewalls que operan en el nivel de red.";
 answers[29] = 3;
 units[29] = ['119'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8138. Examen TIC A2 2010 interna";
 preguntaids[29] = 8138


//  Id pregunta: 1418 Año de creación de pregunta: 2016
 questions[30]= "31)  El art&iacute;culo 2 de la Constituci&oacute;n Espa&ntilde;ola de 1978, despu&eacute;s de declarar la indisoluble unidad de la Naci&oacute;n espa&ntilde;ola, reconoce y garantiza:";
 choices[30]= new Array();
 choices[30][0] = "El derecho a la autonom&iacute;a de las regiones y naciones que la integran.";
 choices[30][1] = "El derecho a la autonom&iacute;a de las regiones y provincias que la integran.";
 choices[30][2] = "El derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[30][3] = "Ninguna es correcta.";
 answers[30] = 2;
 units[30] = ['1'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 1418. ";
 preguntaids[30] = 1418


//  Id pregunta: 8013 Año de creación de pregunta: 2011
 questions[31]= "32)  En los diagramas estructurados (Nassi-Schneiderman):";
 choices[31]= new Array();
 choices[31][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[31][1] = "No hay flechas de uni&oacute;n.";
 choices[31][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[31][3] = "Las cajas no son contiguas.";
 answers[31] = 1;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 8013. Examen TIC A2 2010";
 preguntaids[31] = 8013


//  Id pregunta: 8332 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[32]= new Array();
 choices[32][0] = "ISO 9001";
 choices[32][1] = "ISO 9000";
 choices[32][2] = "ISO 9004";
 choices[32][3] = "ISO 19011";
 answers[32] = 0;
 units[32] = ['92'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 8332. Examen UPM A2 2011";
 preguntaids[32] = 8332


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "De la C&aacute;mara respectiva.";
 choices[33][1] = "Del Rey.";
 choices[33][2] = "Del Tribunal Constitucional.";
 choices[33][3] = "Del Tribunal Supremo.";
 answers[33] = 0;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 50. Constituci&oacute;n de 1978";
 preguntaids[33] = 50


//  Id pregunta: 5915 Año de creación de pregunta: 2007
 questions[34]= "35)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[34]= new Array();
 choices[34][0] = "Primera FN";
 choices[34][1] = "Segunda FN";
 choices[34][2] = "Tercera FN";
 choices[34][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[34] = 1;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5915. ";
 preguntaids[34] = 5915


//  Id pregunta: 3267 Año de creación de pregunta: 2003
 questions[35]= "36)  La escalabilidad vertical tiene que ver con:";
 choices[35]= new Array();
 choices[35][0] = "Granjas de servidores";
 choices[35][1] = "Servidores en rack";
 choices[35][2] = "Cluster de seridores";
 choices[35][3] = "Nada de lo anterior";
 answers[35] = 3;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3267. ";
 preguntaids[35] = 3267


//  Id pregunta: 4061 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a las conexiones mediante flujos de datos en un DFD (Diagrama de Flujo de Datos) es correcta?";
 choices[36]= new Array();
 choices[36][0] = "En un DFD los almacenes se pueden conectar con procesos, pero no con otros almacenes ni con entidades externas.";
 choices[36][1] = "En un DFD los almacenes de datos se pueden conectar con procesos, almacenes pero no con entidades externas.";
 choices[36][2] = "En un DFD las entidades externas se pueden conectar con procesos y almacenes y entidades externas.";
 choices[36][3] = "En un DFD las entidades externas se pueden conectar con procesos y con otras entidades externas pero no con almacenes.";
 answers[36] = 0;
 units[36] = ['85', '86'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 4061. ";
 preguntaids[36] = 4061


//  Id pregunta: 10045 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[37]= new Array();
 choices[37][0] = "Diagrama de clases.";
 choices[37][1] = "Diagrama de objetos.";
 choices[37][2] = "Diagrama de despliegue.";
 choices[37][3] = "Diagrama de actividades.";
 answers[37] = 3;
 units[37] = ['85', '89'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10045. Examen TIC A2 2014";
 preguntaids[37] = 10045


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[38]= new Array();
 choices[38][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[38][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[38][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[38][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[38] = 3;
 units[38] = ['5'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 152. Uni&oacute;n Europea";
 preguntaids[38] = 152


//  Id pregunta: 10000 Año de creación de pregunta: 2015
 questions[39]= "40)  El comando utilizado en el lenguaje de programaci&oacute;n Objective-C para imprimir mensajes en pantalla es:";
 choices[39]= new Array();
 choices[39][0] = "NSLog";
 choices[39][1] = "WRLog";
 choices[39][2] = "Writeln";
 choices[39][3] = "Printline";
 answers[39] = 0;
 units[39] = ['59'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10000. Examen TIC A2 2014";
 preguntaids[39] = 10000


//  Id pregunta: 10841 Año de creación de pregunta: 2015
 questions[40]= "41)  En IPv6, desaparece el direccionamiento:";
 choices[40]= new Array();
 choices[40][0] = "Unicast";
 choices[40][1] = "Multicast";
 choices[40][2] = "Anycast";
 choices[40][3] = "Broadcast";
 answers[40] = 3;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10841. ";
 preguntaids[40] = 10841


//  Id pregunta: 2718 Año de creación de pregunta: 2002
 questions[41]= "42)  Dada una relaci&oacute;n R y dos de sus atributos X e Y, si cada valor de X tiene asociado con &eacute;l un &uacute;nico valorde Y en todo instante, se dice que:";
 choices[41]= new Array();
 choices[41][0] = "El atributo X es funcionalmente dependiente del atributo Y";
 choices[41][1] = "El atributo Y es funcionalmente dependiente del atributo X";
 choices[41][2] = "La relaci&oacute;n R no est&aacute; normalizada";
 choices[41][3] = "La relaci&oacute;n R no est&aacute; en Segunda Forma Normal";
 answers[41] = 1;
 units[41] = ['61'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2718. ";
 preguntaids[41] = 2718


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[42]= "43)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[42]= new Array();
 choices[42][0] = "Carta de servicios electr&oacute;nicos";
 choices[42][1] = "Carta de servicios";
 choices[42][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[42][3] = "Debe disponer de todos los anteriores";
 answers[42] = 3;
 units[42] = ['2'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 8431. ";
 preguntaids[42] = 8431


//  Id pregunta: 1171 Año de creación de pregunta: 2016
 questions[43]= "44)  En la plataforma Microsoft .NET, el encargado de transformar el c&oacute;digo intermedio a c&oacute;digo m&aacute;quina se denomina:";
 choices[43]= new Array();
 choices[43][0] = "ByteCode.";
 choices[43][1] = "Empaquetador COM.";
 choices[43][2] = "CIL.";
 choices[43][3] = "CLR.";
 answers[43] = 3;
 units[43] = ['63'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 1171. ";
 preguntaids[43] = 1171


//  Id pregunta: 7854 Año de creación de pregunta: 2011
 questions[44]= "45)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[44]= new Array();
 choices[44][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[44][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[44][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[44][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[44] = 0;
 units[44] = ['100'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 7854. Examen TIC A1 2010";
 preguntaids[44] = 7854


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[45]= "46)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[45]= new Array();
 choices[45][0] = "El derecho a la propiedad privada.";
 choices[45][1] = "El derecho de asociaci&oacute;n.";
 choices[45][2] = "El derecho de fundaci&oacute;n.";
 choices[45][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[45] = 1;
 units[45] = ['1'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[45] = 2


//  Id pregunta: 5935 Año de creación de pregunta: 2007
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[46]= new Array();
 choices[46][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[46][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y video";
 choices[46][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[46][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[46] = 0;
 units[46] = ['109', '122'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5935. ";
 preguntaids[46] = 5935


//  Id pregunta: 4316 Año de creación de pregunta: 2004
 questions[47]= "48)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[47]= new Array();
 choices[47][0] = "uSCSI";
 choices[47][1] = "FCP";
 choices[47][2] = "iSCSI";
 choices[47][3] = "FCIP";
 answers[47] = 2;
 units[47] = ['100'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 4316. Similar a examen TIC SS A 2004";
 preguntaids[47] = 4316


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[48]= "49)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[48]= new Array();
 choices[48][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[48][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[48][2] = "Quejas y reclamaciones.";
 choices[48][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[48] = 1;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[48] = 6829


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[49]= "50)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[49]= new Array();
 choices[49][0] = "El Segundo.";
 choices[49][1] = "El Primero.";
 choices[49][2] = "El Preliminar.";
 choices[49][3] = "El Tercero.";
 answers[49] = 2;
 units[49] = ['1'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 93. Constituci&oacute;n de 1978";
 preguntaids[49] = 93


//  Id pregunta: 3182 Año de creación de pregunta: 2003
 questions[50]= "51)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Una persona f&iacute;sica";
 choices[50][1] = "Una persona jur&iacute;dica";
 choices[50][2] = "Ambas";
 choices[50][3] = "S&oacute;lo el Estado";
 answers[50] = 2;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 3182. Ley 59/2003, art&iacute;culo 2.2";
 preguntaids[50] = 3182


//  Id pregunta: 3788 Año de creación de pregunta: 2002
 questions[51]= "52)  La m&eacute;trica puntos de funci&oacute;n se considera una m&eacute;trica de:";
 choices[51]= new Array();
 choices[51][0] = "Calidad";
 choices[51][1] = "Tiempo de desarrollo";
 choices[51][2] = "Tama&ntilde;o";
 choices[51][3] = "Resultados";
 answers[51] = 2;
 units[51] = ['93'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3788. ";
 preguntaids[51] = 3788


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[52]= new Array();
 choices[52][0] = "La Seguridad Social";
 choices[52][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[52][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[52][3] = "El Banco de Espa&ntilde;a";
 answers[52] = 3;
 units[52] = ['15'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 418. Mercado laboral";
 preguntaids[52] = 418


//  Id pregunta: 6449 Año de creación de pregunta: 2003
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[53]= new Array();
 choices[53][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[53][1] = "Consultas transaccionales (transactional queries)";
 choices[53][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[53][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[53] = 3;
 units[53] = ['100'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 6449. ";
 preguntaids[53] = 6449


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[54]= "55)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[54]= new Array();
 choices[54][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[54][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[54][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[54][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[54] = 2;
 units[54] = ['8'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 260. Ley 39/2015";
 preguntaids[54] = 260


//  Id pregunta: 5384 Año de creación de pregunta: 2006
 questions[55]= "56)  Un modem RDSI";
 choices[55]= new Array();
 choices[55][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[55][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[55][2] = "Es un t&eacute;rmino incorrecto";
 choices[55][3] = "Tiene un SPID (n&uacute;mero de l&iacute;nea) propio";
 answers[55] = 2;
 units[55] = ['114'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 5384. ";
 preguntaids[55] = 5384


//  Id pregunta: 9406 Año de creación de pregunta: 2014
 questions[56]= "57)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado si se conocen bien todos los requisitos de partida?";
 choices[56]= new Array();
 choices[56][0] = "R&aacute;pido";
 choices[56][1] = "Evolutivo";
 choices[56][2] = "Incremental";
 choices[56][3] = "Cualquiera de los anteriores";
 answers[56] = 2;
 units[56] = ['90'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 9406. ";
 preguntaids[56] = 9406


//  Id pregunta: 4188 Año de creación de pregunta: 2006
 questions[57]= "58)  La base para el an&aacute;lisis de un sistema de tiempo real pasa por:";
 choices[57]= new Array();
 choices[57][0] = "La teor&iacute;a de los sistemas lineales.";
 choices[57][1] = "La especificaci&oacute;n de las pruebas de caja blanca.";
 choices[57][2] = "La sincronizaci&oacute;n.";
 choices[57][3] = "Ninguna de las anteriores.";
 answers[57] = 0;
 units[57] = ['86'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 4188. ";
 preguntaids[57] = 4188


//  Id pregunta: 1331 Año de creación de pregunta: 2016
 questions[58]= "59)  EI termino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[58]= new Array();
 choices[58][0] = "Authentication, Consistency, Integrity, Durability.";
 choices[58][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[58][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[58][3] = "Availability, Consistency, Isolation, Durability.";
 answers[58] = 2;
 units[58] = ['61'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1331. ";
 preguntaids[58] = 1331


//  Id pregunta: 7856 Año de creación de pregunta: 2011
 questions[59]= "60)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[59]= new Array();
 choices[59][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[59][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[59][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[59][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[59] = 2;
 units[59] = ['86'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 7856. Examen TIC A1 2010";
 preguntaids[59] = 7856


//  Id pregunta: 6104 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;Cual de los siguientes es el m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.4.01?";
 choices[60]= new Array();
 choices[60][0] = "Ponderaci&oacute;n Lineal";
 choices[60][1] = "Permutaci&oacute;n";
 choices[60][2] = "Prometh&eacute;e";
 choices[60][3] = "Distancia al Ideal (TOPSIS)";
 answers[60] = 0;
 units[60] = ['38'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 6104. Examen TIC A1 MAP 2007";
 preguntaids[60] = 6104


//  Id pregunta: 4242 Año de creación de pregunta: 2006
 questions[61]= "62)  En el m&eacute;todo de Puntos de Funci&oacute;n de Albretch se consideran cinco par&aacute;metros entre los cu&aacute;les est&aacute;n";
 choices[61]= new Array();
 choices[61][0] = "Ficheros l&oacute;gicos externos";
 choices[61][1] = "Salidas internas";
 choices[61][2] = "Ficheros de interfaz externos";
 choices[61][3] = "Consultas internas";
 answers[61] = 2;
 units[61] = ['94'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 4242. ";
 preguntaids[61] = 4242


//  Id pregunta: 3175 Año de creación de pregunta: 2002
 questions[62]= "63)  Los servicios que ofrece el protocolo SET (Secure Electronico Transaction) son:";
 choices[62]= new Array();
 choices[62][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[62][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[62][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[62][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[62] = 1;
 units[62] = ['75'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3175. ";
 preguntaids[62] = 3175


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "Estrasburgo.";
 choices[63][1] = "Bruselas.";
 choices[63][2] = "Luxemburgo.";
 choices[63][3] = "Par&iacute;s.";
 answers[63] = 1;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 126. Uni&oacute;n Europea";
 preguntaids[63] = 126


//  Id pregunta: 4231 Año de creación de pregunta: 2006
 questions[64]= "65)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[64]= new Array();
 choices[64][0] = "La Usabilidad.";
 choices[64][1] = "La Correcci&oacute;n.";
 choices[64][2] = "La Eficiencia.";
 choices[64][3] = "La Fiabilidad.";
 answers[64] = 3;
 units[64] = ['93'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4231. ";
 preguntaids[64] = 4231


//  Id pregunta: 9033 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[65]= new Array();
 choices[65][0] = "a) Publicidad y transparencia";
 choices[65][1] = "b) Salvaguarda de la libre competencia";
 choices[65][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[65][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[65] = 3;
 units[65] = ['10'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 9033. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";
 preguntaids[65] = 9033


//  Id pregunta: 7347 Año de creación de pregunta: 2010
 questions[66]= "67)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[66]= new Array();
 choices[66][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[66][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[66][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[66][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[66] = 1;
 units[66] = ['94'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 7347. ";
 preguntaids[66] = 7347


//  Id pregunta: 975 Año de creación de pregunta: 2016
 questions[67]= "68)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[67][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[67][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[67][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[67] = 0;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 975. Ley 40/2015";
 preguntaids[67] = 975


//  Id pregunta: 8465 Año de creación de pregunta: 2011
 questions[68]= "69)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 10?";
 choices[68]= new Array();
 choices[68][0] = "Monol&iacute;tico";
 choices[68][1] = "Microkernel";
 choices[68][2] = "Nanokernel";
 choices[68][3] = "Hibrida";
 answers[68] = 3;
 units[68] = ['52'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8465. ";
 preguntaids[68] = 8465


//  Id pregunta: 10258 Año de creación de pregunta: 2015
 questions[69]= "70)  Respecto a la factura electr&oacute;nica:";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo es obligatoria en el &aacute;mbito de la AGE";
 choices[69][1] = "Reglamentariamente pueden excluirse las de importe inferior a 5000&euro;";
 choices[69][2] = "No est&aacute;n obligadas las agrupaciones de inter&eacute;s econ&oacute;mico europeas";
 choices[69][3] = "Todas son correctas";
 answers[69] = 1;
 units[69] = ['75'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 10258. ";
 preguntaids[69] = 10258


//  Id pregunta: 6390 Año de creación de pregunta: 2003
 questions[70]= "71)  Los resultados del modelo EFQM se eval&uacute;an";
 choices[70]= new Array();
 choices[70][0] = "Respecto a los clientes";
 choices[70][1] = "Respecto a la sociedad";
 choices[70][2] = "Respecto al personal de la empresa";
 choices[70][3] = "Todas las respuestas son correctas";
 answers[70] = 3;
 units[70] = ['93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 6390. Examen 2006 JCYL";
 preguntaids[70] = 6390


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[71]= "72)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[71]= new Array();
 choices[71][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[71][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[71][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[71][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[71] = 2;
 units[71] = ['7'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 226. Ley 39/2015";
 preguntaids[71] = 226


//  Id pregunta: 7457 Año de creación de pregunta: 2010
 questions[72]= "73)  La autenticaci&oacute;n consiste en:";
 choices[72]= new Array();
 choices[72][0] = "Comprobar los permisos del usuario";
 choices[72][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[72][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[72][3] = "Comprobar la identidad del usuario";
 answers[72] = 3;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 7457. ";
 preguntaids[72] = 7457


//  Id pregunta: 10951 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Se ha publicado la Estrategia TIC?";
 choices[73]= new Array();
 choices[73][0] = "No";
 choices[73][1] = "No est&aacute; previsto";
 choices[73][2] = "Si, en septiembre de 2015.";
 choices[73][3] = "Si, en septiembre de 2014.";
 answers[73] = 2;
 units[73] = ['26'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 10951. ";
 preguntaids[73] = 10951


//  Id pregunta: 3219 Año de creación de pregunta: 2003
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[74]= new Array();
 choices[74][0] = "Resistencia a la preimagen";
 choices[74][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[74][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[74][3] = "Resistencia a la no colisi&oacute;n";
 answers[74] = 3;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 3219. ";
 preguntaids[74] = 3219


