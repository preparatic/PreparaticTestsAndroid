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
//  Id pregunta: 948 Año de creación de pregunta: 2016
 questions[0]= "1)  Cu&aacute;l de los siguientes aspectos NO se considera obligatorio en la Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE.";
 choices[0]= new Array();
 choices[0][0] = "Se realizar&aacute;n a trav&eacute;s de sede electr&oacute;nica todas las actuaciones que requieran de autenticaci&oacute;n tanto de la Administraci&oacute;n como del ciudadano.";
 choices[0][1] = "Cuando se recojan datos personales mediante un formulario se deber&aacute; incluir una clausula informativa de acuerdo al Art&iacute;culo 5 de la LOPD.";
 choices[0][2] = "La p&aacute;gina de inicio deber&aacute; contar con informaci&oacute;n sobre accesibilidad del portal e iconos de cumplimiento de la norma WAI.";
 choices[0][3] = "Usar pictogramas e iconos que sean intuitivos.";
 answers[0] = 3;
 units[0] = ['125'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 948. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[0] = 948


//  Id pregunta: 9136 Año de creación de pregunta: 2014
 questions[1]= "2)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[1]= new Array();
 choices[1][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[1][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[1][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[1][3] = "Ninguna de las anteriores.";
 answers[1] = 1;
 units[1] = ['37'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 9136. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";
 preguntaids[1] = 9136


//  Id pregunta: 9958 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[2]= new Array();
 choices[2][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[2][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[2][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[2][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de  ciberseguridad.";
 answers[2] = 0;
 units[2] = ['46'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 9958. ";
 preguntaids[2] = 9958


//  Id pregunta: 2931 Año de creación de pregunta: 2002
 questions[3]= "4)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[3]= new Array();
 choices[3][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[3][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[3][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[3][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[3] = 2;
 units[3] = ['77', '78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2931. ";
 preguntaids[3] = 2931


//  Id pregunta: 2305 Año de creación de pregunta: 2002
 questions[4]= "5)  Ser&aacute; necesario el consentimiento del afectado cuando se trate de datos:";
 choices[4]= new Array();
 choices[4][0] = "Recogidos por las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[4][1] = "Cuando el tratamiento tenga por finalidad proteger un inter&eacute;s vital del interesado del art&iacute;culo 7, apartado 6 de la LOPD";
 choices[4][2] = "Que figuren en fuentes accesibles al p&uacute;blico";
 choices[4][3] = "Ninguna es correcta";
 answers[4] = 3;
 units[4] = ['35'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2305. ";
 preguntaids[4] = 2305


//  Id pregunta: 10625 Año de creación de pregunta: 2015
 questions[5]= "6)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho del usuario de telecomunicaciones?:";
 choices[5]= new Array();
 choices[5][0] = "A oponerse a recibir llamadas comerciales no deseadas, en todo caso.";
 choices[5][1] = "A que no se traten sus datos de localizaci&oacute;n, en todo caso.";
 choices[5][2] = "A no figurar en las gu&iacute;as de abonados, en todo caso.";
 choices[5][3] = "Ninguno es un derecho del usuario.";
 answers[5] = 3;
 units[5] = ['121'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10625. Articulo 48";
 preguntaids[5] = 10625


//  Id pregunta: 1830 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por IP Spoofing?";
 choices[6]= new Array();
 choices[6][0] = "Es un ataque que se basa en la ejecuci&oacute;n de c&oacute;digo &ldquo;Script&rdquo; arbitrario en un navegador.";
 choices[6][1] = "Es un ataque que pretende provocar un direccionamiento err&oacute;neo en los equipos afectados, mediante la traducci&oacute;n err&oacute;nea de los nombres de dominio a direcciones IP.";
 choices[6][2] = "Es un ataque que consiste en modificar la cabecera de los paquetes enviados a un determinado sistema inform&aacute;tico para simular que proceden de un equipo distinto al que verdaderamente los ha originado.";
 choices[6][3] = "Es un ataque que se compone de un conjunto de actuaciones que persiguen colapsar determinados equipos o redes inform&aacute;ticas, para impedir que puedan ofrecer sus servicios a sus clientes y usuarios.";
 answers[6] = 2;
 units[6] = ['119'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 1830. ";
 preguntaids[6] = 1830


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[7]= new Array();
 choices[7][0] = "Art&iacute;culo 16.2.";
 choices[7][1] = "Art&iacute;culo 17.1.";
 choices[7][2] = "Art&iacute;culo 18.1.";
 choices[7][3] = "Art&iacute;culo 18.2.";
 answers[7] = 2;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 51. Constituci&oacute;n de 1978";
 preguntaids[7] = 51


//  Id pregunta: 4333 Año de creación de pregunta: 2004
 questions[8]= "9)  &iquest;Cu&aacute;l es el sistema de acceso que utiliza GPRS?";
 choices[8]= new Array();
 choices[8][0] = "OFDM/TDD";
 choices[8][1] = "CDMA/TDD";
 choices[8][2] = "CDMA/FDD";
 choices[8][3] = "Ninguno de los anteriores";
 answers[8] = 3;
 units[8] = ['117'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 4333. ";
 preguntaids[8] = 4333


//  Id pregunta: 8022 Año de creación de pregunta: 2011
 questions[9]= "10)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es:";
 choices[9]= new Array();
 choices[9][0] = "750 nm.";
 choices[9][1] = "820 nm.";
 choices[9][2] = "1310 nm.";
 choices[9][3] = "1550 nm.";
 answers[9] = 3;
 units[9] = ['106'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 8022. Examen TIC A2 2010";
 preguntaids[9] = 8022


//  Id pregunta: 3945 Año de creación de pregunta: 2002
 questions[10]= "11)  Para evaluar el comportamiento de un sistema inform&aacute;tico se utilizan diferentes variables. Una de las siguientes no es utilizada para este fin:";
 choices[10]= new Array();
 choices[10][0] = "Factor de cola";
 choices[10][1] = "Overhead";
 choices[10][2] = "Swapping";
 choices[10][3] = "Triggers";
 answers[10] = 3;
 units[10] = ['30'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 3945. ";
 preguntaids[10] = 3945


//  Id pregunta: 2935 Año de creación de pregunta: 2002
 questions[11]= "12)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[11]= new Array();
 choices[11][0] = "El boot-strap";
 choices[11][1] = "El dispatcher";
 choices[11][2] = "El scheduler";
 choices[11][3] = "Ninguno de los anteriores";
 answers[11] = 2;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2935. ";
 preguntaids[11] = 2935


//  Id pregunta: 6660 Año de creación de pregunta: 2009
 questions[12]= "13)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[12]= new Array();
 choices[12][0] = "HINFO &quot;Host Information&quot;";
 choices[12][1] = "SOA &quot; Start Of Authority&quot;";
 choices[12][2] = "TTL &quot;Time-To- Live&quot;";
 choices[12][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[12] = 2;
 units[12] = ['116'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6660. MAP 2008 A1";
 preguntaids[12] = 6660


//  Id pregunta: 10893 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[13]= new Array();
 choices[13][0] = "Siempre preceden a ataques de acceso";
 choices[13][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[13][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[13][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[13] = 1;
 units[13] = ['119'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10893. ";
 preguntaids[13] = 10893


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[14]= "15)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[14]= new Array();
 choices[14][0] = "De ocho a&ntilde;os.";
 choices[14][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "No existe un l&iacute;mite.";
 answers[14] = 0;
 units[14] = ['14'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 412. Pol&iacute;ticas de igualdad";
 preguntaids[14] = 412


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[15]= "16)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[15]= new Array();
 choices[15][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[15][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[15][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[15][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[15] = 1;
 units[15] = ['22'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 512. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[15] = 512


//  Id pregunta: 7936 Año de creación de pregunta: 2011
 questions[16]= "17)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[16]= new Array();
 choices[16][0] = "Dispositivos administrados.";
 choices[16][1] = "Agentes.";
 choices[16][2] = "Sistemas administradores de red (NMS).";
 choices[16][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[16] = 3;
 units[16] = ['112'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7936. Examen TIC A2 2010";
 preguntaids[16] = 7936


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[17]= "18)  La soberan&iacute;a nacional reside en:";
 choices[17]= new Array();
 choices[17][0] = "el Parlamento nacional.";
 choices[17][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[17][2] = "el pueblo espa&ntilde;ol.";
 choices[17][3] = "el Congreso y el Senado.";
 answers[17] = 2;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[17] = 82


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[18]= new Array();
 choices[18][0] = "La CETIC";
 choices[18][1] = "Los Ministerios";
 choices[18][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[18][3] = "Ninguno de los anteriores";
 answers[18] = 1;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 471. Estrategia TIC";
 preguntaids[18] = 471


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[19]= new Array();
 choices[19][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[19][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[19][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[19][3] = "Todas lo son";
 answers[19] = 0;
 units[19] = ['17'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 432. Mercado &Uacute;nico Digital";
 preguntaids[19] = 432


//  Id pregunta: 9453 Año de creación de pregunta: 2014
 questions[20]= "21)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[20]= new Array();
 choices[20][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[20][1] = "La no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[20][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[20][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[20] = 1;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 9453. A: grave; B: muy grave; C: grave; D: grave";
 preguntaids[20] = 9453


//  Id pregunta: 1021 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[21]= new Array();
 choices[21][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[21][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[21][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[21][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[21] = 3;
 units[21] = ['4', '7', '8', '9'];
 blocks[21] = ['A1', 'A2'];
 comments[21] = "Id Pregunta: 1021. Ley 40/2015";
 preguntaids[21] = 1021


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[22]= new Array();
 choices[22][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado";
 choices[22][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[22][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[22][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[22] = 2;
 units[22] = ['7'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 244. Ley 39/2015";
 preguntaids[22] = 244


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[23]= "24)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[23][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[23][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[23][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[23] = 0;
 units[23] = ['1'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[23] = 97


//  Id pregunta: 7194 Año de creación de pregunta: 2010
 questions[24]= "25)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[24]= new Array();
 choices[24][0] = "Repetidor";
 choices[24][1] = "Puente (bridge)";
 choices[24][2] = "Pasarela (gateway)";
 choices[24][3] = "Encaminador (router)";
 answers[24] = 1;
 units[24] = ['102'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7194. Castilla La Mancha 2009";
 preguntaids[24] = 7194


//  Id pregunta: 3308 Año de creación de pregunta: 2004
 questions[25]= "26)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[25]= new Array();
 choices[25][0] = "Advanced Distributed Learning";
 choices[25][1] = "Advanced Distanced Learning";
 choices[25][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = 0;
 units[25] = ['70'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3308. ";
 preguntaids[25] = 3308


//  Id pregunta: 6827 Año de creación de pregunta: 2010
 questions[26]= "27)  La gesti&oacute;n del alcance de un proyecto de tecnolog&iacute;as de la informaci&oacute;n se suele dividir en 5 etapas; indicar cu&aacute;l de las siguientes NO es una de ellas:";
 choices[26]= new Array();
 choices[26][0] = "Planificaci&oacute;n del alcance.";
 choices[26][1] = "Creaci&oacute;n de la Estructura de Desglose del Trabajo (EDT).";
 choices[26][2] = "Definici&oacute;n del alcance.";
 choices[26][3] = "Estimaci&oacute;n de la duraci&oacute;n de las actividades o trabajos.";
 answers[26] = 3;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 6827. TIC A 2009";
 preguntaids[26] = 6827


//  Id pregunta: 3937 Año de creación de pregunta: 2002
 questions[27]= "28)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[27]= new Array();
 choices[27][0] = "Liderazgo";
 choices[27][1] = "Personas";
 choices[27][2] = "Estrategia";
 choices[27][3] = "Satisfacci&oacute;n del cliente";
 answers[27] = 3;
 units[27] = ['98'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3937. ";
 preguntaids[27] = 3937


//  Id pregunta: 10072 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Qu&eacute; es Navicat Premium en el entorno de administraci&oacute;n de bases de datos?";
 choices[28]= new Array();
 choices[28][0] = "Es un conjunto de herramientas multiplataforma de software libre creado para ayudar a los administradores y desarrolladores de aplicaciones de bases de datos Oracle. Tambi&eacute;n suministra soporte para MySQL y PostgreSQL.";
 choices[28][1] = "Es una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 choices[28][2] = "Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java.";
 choices[28][3] = "Es un administrador de bases de datos propietario, de m&uacute;ltiples conexiones, que permite conectarse a diversas bases de datos como MySQL, MariaDB, SQL Server, etc. Simult&aacute;neamente en una sola aplicaci&oacute;n.";
 answers[28] = 3;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 10072. Examen TIC A2 2014";
 preguntaids[28] = 10072


//  Id pregunta: 9255 Año de creación de pregunta: 2014
 questions[29]= "30)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[29]= new Array();
 choices[29][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[29][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[29][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[29][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[29] = 1;
 units[29] = ['60'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 9255. Examen TIC A2 2013";
 preguntaids[29] = 9255


//  Id pregunta: 8984 Año de creación de pregunta: 2013
 questions[30]= "31)  La Comisi&oacute;n de Estrategia TIC:";
 choices[30]= new Array();
 choices[30][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[30][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[30][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[30][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[30] = 2;
 units[30] = ['26'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 8984. Examen TIC A1 2011";
 preguntaids[30] = 8984


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[31]= "32)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[31]= new Array();
 choices[31][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[31][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[31][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[31][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[31] = 0;
 units[31] = ['10'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 1977. ";
 preguntaids[31] = 1977


//  Id pregunta: 8620 Año de creación de pregunta: 2013
 questions[32]= "33)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[32]= new Array();
 choices[32][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[32][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[32][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[32][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[32] = 0;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 8620. Examen TIC A2 2011";
 preguntaids[32] = 8620


//  Id pregunta: 2909 Año de creación de pregunta: 2002
 questions[33]= "34)  Indique cu&aacute;l es una ventaja de los applets sobre los scripts:";
 choices[33]= new Array();
 choices[33][0] = "El c&oacute;digo fuente de los applets no es visible";
 choices[33][1] = "Un applet descarga en una sola conexi&oacute;n todos los componentes necesarios";
 choices[33][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 choices[33][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 answers[33] = 2;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 2909. ";
 preguntaids[33] = 2909


//  Id pregunta: 6874 Año de creación de pregunta: 2010
 questions[34]= "35)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v3:";
 choices[34]= new Array();
 choices[34][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos derivados del uso de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones (TIC).";
 choices[34][1] = "Ayudar a descubrir y planificar el tratamiento oportuno para mantener los riesgos bajo control.";
 choices[34][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[34][3] = "Preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n, seg&uacute;n corresponda en cada caso.";
 answers[34] = 2;
 units[34] = ['45'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 6874. TIC A 2009";
 preguntaids[34] = 6874


//  Id pregunta: 6099 Año de creación de pregunta: 2003
 questions[35]= "36)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[35]= new Array();
 choices[35][0] = "10 d&iacute;as naturales";
 choices[35][1] = "10 d&iacute;as h&aacute;biles";
 choices[35][2] = "20 d&iacute;as naturales";
 choices[35][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[35] = 0;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 6099. Examen TIC A1 MAP 2007";
 preguntaids[35] = 6099


//  Id pregunta: 9717 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[36]= new Array();
 choices[36][0] = "&lt;head&gt;";
 choices[36][1] = "&lt;video&gt;";
 choices[36][2] = "&lt;music&gt;";
 choices[36][3] = "&lt;background&gt;";
 answers[36] = 1;
 units[36] = ['74'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9717. http://es.wikipedia.org/wiki/HTML5";
 preguntaids[36] = 9717


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[37]= "38)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "Medidas de igualdad.";
 choices[37][1] = "Objetivos de igualdad.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "A y B son incorrectas.";
 answers[37] = 2;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 383. Pol&iacute;ticas de igualdad";
 preguntaids[37] = 383


//  Id pregunta: 7341 Año de creación de pregunta: 2010
 questions[38]= "39)  En el m&eacute;todo de los Puntos de Funci&oacute;n se valoran:";
 choices[38]= new Array();
 choices[38][0] = "15 caracter&iacute;sticas generales";
 choices[38][1] = "5 caracter&iacute;sticas generales";
 choices[38][2] = "6 caracter&iacute;sticas generales";
 choices[38][3] = "14 caracter&iacute;sticas generales";
 answers[38] = 3;
 units[38] = ['94'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 7341. ";
 preguntaids[38] = 7341


//  Id pregunta: 7895 Año de creación de pregunta: 2011
 questions[39]= "40)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[39]= new Array();
 choices[39][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[39][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[39][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[39][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[39] = 1;
 units[39] = ['98'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7895. Examen TIC A1 2010";
 preguntaids[39] = 7895


//  Id pregunta: 4671 Año de creación de pregunta: 2002
 questions[40]= "41)  Del protocolo IKE de IPSec podemos decir:";
 choices[40]= new Array();
 choices[40][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[40][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[40][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[40][3] = "nada de lo anterior es cierto";
 answers[40] = 0;
 units[40] = ['119'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4671. Consultar rfc 2409";
 preguntaids[40] = 4671


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[41]= "42)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[41]= new Array();
 choices[41][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[41][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[41][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[41][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[41] = 3;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[41] = 2514


//  Id pregunta: 7822 Año de creación de pregunta: 2010
 questions[42]= "43)  El m&eacute;todo de Saaty o AHP:";
 choices[42]= new Array();
 choices[42][0] = "Es relativo a accesibilidad web.";
 choices[42][1] = "Es relativo a la decisi&oacute;n multicriterio.";
 choices[42][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n.";
 choices[42][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo.";
 answers[42] = 1;
 units[42] = ['38'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 7822. ";
 preguntaids[42] = 7822


//  Id pregunta: 10194 Año de creación de pregunta: 2015
 questions[43]= "44)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[43][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[43][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[43][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[43] = 0;
 units[43] = ['74'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 10194. Examen TIC A1 2014";
 preguntaids[43] = 10194


//  Id pregunta: 10744 Año de creación de pregunta: 2015
 questions[44]= "45)  El modelo de estimaci&oacute;n que establece que el esfuerzo de desarrollo de un proyecto Software sigue una distribuci&oacute;n de Rayleigh-Norden es el de:";
 choices[44]= new Array();
 choices[44][0] = "PUTNAM";
 choices[44][1] = "COCOMO";
 choices[44][2] = "WALTSON-FELIX";
 choices[44][3] = "ESTERLING";
 answers[44] = 0;
 units[44] = ['94'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10744. ";
 preguntaids[44] = 10744


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[45]= "46)  Si comparamos SSL y SET:";
 choices[45]= new Array();
 choices[45][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[45][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[45][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[45][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[45] = 0;
 units[45] = ['10', '75'];
 blocks[45] = ['A2', 'B2'];
 comments[45] = "Id Pregunta: 3056. ";
 preguntaids[45] = 3056


//  Id pregunta: 6011 Año de creación de pregunta: 2003
 questions[46]= "47)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[46]= new Array();
 choices[46][0] = "Definen la estructura del documento XML.";
 choices[46][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[46][2] = "Siempre han de estar incluidos en el XML.";
 choices[46][3] = "Contienen elementos y atributos.";
 answers[46] = 0;
 units[46] = ['65'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6011. TIC B 2007";
 preguntaids[46] = 6011


//  Id pregunta: 5180 Año de creación de pregunta: 2003
 questions[47]= "48)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[47]= new Array();
 choices[47][0] = "IMODE";
 choices[47][1] = "OFDM";
 choices[47][2] = "BLUETOOTH";
 choices[47][3] = "WIFI";
 answers[47] = 2;
 units[47] = ['107'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5180. ";
 preguntaids[47] = 5180


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[48]= new Array();
 choices[48][0] = "El rey, a propuesta del Gobierno.";
 choices[48][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[48][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[48][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[48] = 1;
 units[48] = ['1'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 37. Constituci&oacute;n de 1978";
 preguntaids[48] = 37


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[49]= "50)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[49]= new Array();
 choices[49][0] = "El derecho a la propiedad privada.";
 choices[49][1] = "El derecho de asociaci&oacute;n.";
 choices[49][2] = "El derecho de fundaci&oacute;n.";
 choices[49][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[49] = 1;
 units[49] = ['1'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[49] = 2


//  Id pregunta: 4669 Año de creación de pregunta: 2002
 questions[50]= "51)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[50]= new Array();
 choices[50][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[50][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[50][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[50][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[50] = 1;
 units[50] = ['104'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4669. ";
 preguntaids[50] = 4669


//  Id pregunta: 2582 Año de creación de pregunta: 2002
 questions[51]= "52)  Arquitectura &ldquo;fault tolerant&rdquo; significa:";
 choices[51]= new Array();
 choices[51][0] = "Que el sistema tiene elementos redundantes activos";
 choices[51][1] = "Que el sistema es capaz de funcionar correctamente a&uacute;n en el caso de fallo de algunos elementos";
 choices[51][2] = "Que el sistema tiene elementos redundantes pasivos";
 choices[51][3] = "Todas las anteriores son ciertas";
 answers[51] = 1;
 units[51] = ['50'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2582. ";
 preguntaids[51] = 2582


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[52]= new Array();
 choices[52][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[52][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[52][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[52][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[52] = 2;
 units[52] = ['15'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 423. Mercado laboral";
 preguntaids[52] = 423


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[53]= "54)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[53]= new Array();
 choices[53][0] = "Tener una estructura institucional.";
 choices[53][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[53][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[53][3] = "Todas las respuestas son correctas.";
 answers[53] = 3;
 units[53] = ['5'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 199. Uni&oacute;n Europea";
 preguntaids[53] = 199


//  Id pregunta: 10075 Año de creación de pregunta: 2015
 questions[54]= "55)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[54]= new Array();
 choices[54][0] = "TortoiseCVS";
 choices[54][1] = "Subversive";
 choices[54][2] = "Sventon";
 choices[54][3] = "Subclipse";
 answers[54] = 0;
 units[54] = ['31'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 10075. Examen TIC A2 2014";
 preguntaids[54] = 10075


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[55]= new Array();
 choices[55][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[55][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[55][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[55][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[55] = 0;
 units[55] = ['62'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 696. AGE A1 2015";
 preguntaids[55] = 696


//  Id pregunta: 9793 Año de creación de pregunta: 2015
 questions[56]= "57)  Marque la que no es una medida del Esquema Nacional de Interoperabilidad para la recuperaci&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos:";
 choices[56]= new Array();
 choices[56][0] = "La asociaci&oacute;n de metadatos m&iacute;nimos obligatorios.";
 choices[56][1] = "La documentaci&oacute;n de los procedimientos que garanticen la interoperabilidad a medio y largo plazo.";
 choices[56][2] = "La identificaci&oacute;n &uacute;nica e inequ&iacute;voca de cada documento.";
 choices[56][3] = "El establecimiento de un per&iacute;odo de conservaci&oacute;n de m&iacute;nimo cinco a&ntilde;os.";
 answers[56] = 3;
 units[56] = ['43'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9793. Art&iacute;culo 21.f, RD 4/2010.";
 preguntaids[56] = 9793


//  Id pregunta: 5859 Año de creación de pregunta: 2007
 questions[57]= "58)  En relaci&oacute;n a los modelos vectorial frente a r&aacute;ster en un SIG, se&ntilde;ale la opci&oacute;n verdadera.";
 choices[57]= new Array();
 choices[57][0] = "Las operaciones de c&aacute;lculo se simplifican al utilizar modelos vectoriales.";
 choices[57][1] = "No se deben mezclar datos raster con datos vectoriales entre capas o las prestaciones globales del SIG se ver&aacute;n comprometidas.";
 choices[57][2] = "La precisi&oacute;n gr&aacute;fica del modelo raster supera al modelo vectorial, al no tener que reescalar nada.";
 choices[57][3] = "La cartograf&iacute;a digital tradicional es fundamentalmente de tipo vectorial.";
 answers[57] = 3;
 units[57] = ['71'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5859. ";
 preguntaids[57] = 5859


//  Id pregunta: 6384 Año de creación de pregunta: 2003
 questions[58]= "59)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[58]= new Array();
 choices[58][0] = "400 puntos sobre 1000";
 choices[58][1] = "500 puntos sobre 1000";
 choices[58][2] = "700 puntos sobre 1000";
 choices[58][3] = "900 puntos sobre 1000";
 answers[58] = 1;
 units[58] = ['93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6384. Examen 2006 JCYL";
 preguntaids[58] = 6384


//  Id pregunta: 4917 Año de creación de pregunta: 2002
 questions[59]= "60)  La separaci&oacute;n entre diferentes canales de radio en UMTS se hace mediante:";
 choices[59]= new Array();
 choices[59][0] = "Diferentes frecuencias";
 choices[59][1] = "Distintos intervalos temporales";
 choices[59][2] = "Diferentes c&oacute;digos";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = 2;
 units[59] = ['117'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4917. ";
 preguntaids[59] = 4917


//  Id pregunta: 7467 Año de creación de pregunta: 2010
 questions[60]= "61)  Alfresco es un software de c&oacute;digo abierto de:";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de contenido empresarial";
 choices[60][1] = "Dise&ntilde;o gr&aacute;fico";
 choices[60][2] = "Base de Datos";
 choices[60][3] = "Cuadro de Mando";
 answers[60] = 0;
 units[60] = ['99'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 7467. ";
 preguntaids[60] = 7467


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[61]= "62)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[61]= new Array();
 choices[61][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[61][1] = "Personas con nacionalidad europea.";
 choices[61][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[61][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[61] = 3;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 198. Uni&oacute;n Europea";
 preguntaids[61] = 198


//  Id pregunta: 7943 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast?";
 choices[62]= new Array();
 choices[62][0] = "256";
 choices[62][1] = "254";
 choices[62][2] = "30";
 choices[62][3] = "64";
 answers[62] = 1;
 units[62] = ['109'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7943. Examen TIC A2 2010";
 preguntaids[62] = 7943


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[63]= "64)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[63]= new Array();
 choices[63][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[63][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[63][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[63][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[63] = 2;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[63] = 18


//  Id pregunta: 6541 Año de creación de pregunta: 2003
 questions[64]= "65)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[64]= new Array();
 choices[64][0] = "nivel b&aacute;sico";
 choices[64][1] = "nivel medio";
 choices[64][2] = "nivel alto";
 choices[64][3] = "En ningun caso";
 answers[64] = 2;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 6541. ";
 preguntaids[64] = 6541


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[65]= "66)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[65]= new Array();
 choices[65][0] = "El Presidente y su gabinete.";
 choices[65][1] = "El Presidente y sus Ministros.";
 choices[65][2] = "El Rey y el Presidente.";
 choices[65][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[65] = 3;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 84. Constituci&oacute;n de 1978";
 preguntaids[65] = 84


//  Id pregunta: 2087 Año de creación de pregunta: 2002
 questions[66]= "67)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[66]= new Array();
 choices[66][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[66][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[66][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[66][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[66] = 0;
 units[66] = ['35'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2087. ";
 preguntaids[66] = 2087


//  Id pregunta: 2874 Año de creación de pregunta: 2002
 questions[67]= "68)  En una operaci&oacute;n de resumen o hash, con h = H(M) :";
 choices[67]= new Array();
 choices[67][0] = "M debe ser de longitud fija";
 choices[67][1] = "no tiene por qu&eacute; conocerse H";
 choices[67][2] = "h debe ser de longitud fija";
 choices[67][3] = "dado M, no siempre se va a poder calcular H(M)";
 answers[67] = 2;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2874. ";
 preguntaids[67] = 2874


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[68]= "69)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[68]= new Array();
 choices[68][0] = "El Ministerio de Hacienda.";
 choices[68][1] = "El Ministerio de Econom&iacute;a.";
 choices[68][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[68][3] = "Ninguna de las respuestas es correcta.";
 answers[68] = 2;
 units[68] = ['11'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 286. Presupuestos generales";
 preguntaids[68] = 286


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes principios NO se garantiza en el art&iacute;culo 9.3 de la Constituci&oacute;n Espa&ntilde;ola de 1978?";
 choices[69]= new Array();
 choices[69][0] = "Jerarqu&iacute;a normativa.";
 choices[69][1] = "Seguridad jur&iacute;dica.";
 choices[69][2] = "Responsabilidad y la interdicci&oacute;n de la arbitrariedad de los poderes p&uacute;blicos.";
 choices[69][3] = "Irretroactividad de las disposiciones sancionadoras favorables o restrictivas de derechos individuales.";
 answers[69] = 3;
 units[69] = ['1'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 54. Constituci&oacute;n de 1978";
 preguntaids[69] = 54


//  Id pregunta: 4285 Año de creación de pregunta: 2005
 questions[70]= "71)  Los principales componentes de la Red SARA (Intranet Administrativa) son:";
 choices[70]= new Array();
 choices[70][0] = "&aacute;reas de conexi&oacute;n y red troncal";
 choices[70][1] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 choices[70][2] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes y centro de acceso remoto";
 choices[70][3] = "&aacute;reas de conexi&oacute;n, red troncal, redes perif&eacute;ricas, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 answers[70] = 2;
 units[70] = ['114'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4285. ";
 preguntaids[70] = 4285


//  Id pregunta: 9317 Año de creación de pregunta: 2014
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[71]= new Array();
 choices[71][0] = "Blackboard";
 choices[71][1] = "WebCT";
 choices[71][2] = "Dokeos";
 choices[71][3] = "Desire2Learn";
 answers[71] = 2;
 units[71] = ['70'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 9317. ";
 preguntaids[71] = 9317


//  Id pregunta: 6166 Año de creación de pregunta: 2003
 questions[72]= "73)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[72]= new Array();
 choices[72][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[72][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[72][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[72][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[72] = 2;
 units[72] = ['77'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6166. ";
 preguntaids[72] = 6166


//  Id pregunta: 4278 Año de creación de pregunta: 2006
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[73]= new Array();
 choices[73][0] = "Planificaci&oacute;n del Sistema";
 choices[73][1] = "Gesti&oacute;n de proyectos";
 choices[73][2] = "Aseguramiento de la calidad";
 choices[73][3] = "Seguridad";
 answers[73] = 0;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 4278. ";
 preguntaids[73] = 4278


//  Id pregunta: 3947 Año de creación de pregunta: 2002
 questions[74]= "75)  Por configuraci&oacute;n se entiende:";
 choices[74]= new Array();
 choices[74][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[74][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[74][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[74][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[74] = 2;
 units[74] = ['95'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3947. ";
 preguntaids[74] = 3947


