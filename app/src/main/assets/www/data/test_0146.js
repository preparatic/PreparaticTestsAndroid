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
//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[0]= "1)  Se consideran interesados en el procedimiento administrativo:";
 choices[0]= new Array();
 choices[0][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[0][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[0][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[0][3] = "todas son correctas";
 answers[0] = 0;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[0] = 222


//  Id pregunta: 7865 Año de creación de pregunta: 2011
 questions[1]= "2)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[1]= new Array();
 choices[1][0] = "Mercado &uacute;nico digital din&aacute;mico.";
 choices[1][1] = "Acceso ultrarr&aacute;pido a Internet.";
 choices[1][2] = "Nativos digitales.";
 choices[1][3] = "Inclusi&oacute;n digital.";
 answers[1] = 2;
 units[1] = ['16'];
 blocks[1] = ['A3'];
 comments[1] = "Id Pregunta: 7865. Examen TIC A1 2010";
 preguntaids[1] = 7865


//  Id pregunta: 4213 Año de creación de pregunta: 2006
 questions[2]= "3)  M&Eacute;TRICA v.3 considera que las pruebas de integraci&oacute;n se deben realizar en el proceso de:";
 choices[2]= new Array();
 choices[2][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[2][1] = "M&eacute;trica v.3 no contempla este tipo de pruebas.";
 choices[2][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n y en el de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[2][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[2] = 3;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 4213. ";
 preguntaids[2] = 4213


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[3]= "4)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[3]= new Array();
 choices[3][0] = "El acoso sexual.";
 choices[3][1] = "El acoso por raz&oacute;n del sexo.";
 choices[3][2] = "Ambas son correctas.";
 choices[3][3] = "A y B son incorrectas.";
 answers[3] = 2;
 units[3] = ['14'];
 blocks[3] = ['A3'];
 comments[3] = "Id Pregunta: 401. Pol&iacute;ticas de igualdad";
 preguntaids[3] = 401


//  Id pregunta: 10834 Año de creación de pregunta: 2015
 questions[4]= "5)  En relaci&oacute;n con las t&eacute;cnicas de OCR:";
 choices[4]= new Array();
 choices[4][0] = "La ascendente es la porci&oacute;n de un car&aacute;cter que queda por encima de la l&iacute;nea base";
 choices[4][1] = "Un car&aacute;cter es la unidad b&aacute;sica de reconocimiento y est&aacute; siempre formado por una letra";
 choices[4][2] = "La l&iacute;nea base une las descendentes de una fila de letras";
 choices[4][3] = "Una pica equivale a 12 puntos";
 answers[4] = 3;
 units[4] = ['81'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10834. ";
 preguntaids[4] = 10834


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[5]= "6)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[5]= new Array();
 choices[5][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[5][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[5][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[5][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[5] = 2;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 780. Junta de Extremadura A1 2015";
 preguntaids[5] = 780


//  Id pregunta: 1296 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale, de los siguientes, el sistema de ejecuci&oacute;n multi plataforma desarrollado por Adobe para crear aplicaciones RIA que se pueden ejecutar como aplicaciones de escritorio o de dispositivos m&oacute;viles:";
 choices[6]= new Array();
 choices[6][0] = "Android SDK";
 choices[6][1] = "Mahout";
 choices[6][2] = "InDesign";
 choices[6][3] = "AIR";
 answers[6] = 3;
 units[6] = ['74'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 1296. ";
 preguntaids[6] = 1296


//  Id pregunta: 8869 Año de creación de pregunta: 2013
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa?";
 choices[7]= new Array();
 choices[7][0] = "No cubre todo el ciclo de vida de desarrollo del software, puesto que no se incluye por ejemplo el estudio de viabilidad del sistema";
 choices[7][1] = "Supone que existe una buena direcci&oacute;n por parte del desarrollador y del cliente";
 choices[7][2] = "S&oacute;lo cubre los costes directos del proyecto";
 choices[7][3] = "Un mes.hombre consta de 160 horas de trabajo";
 answers[7] = 3;
 units[7] = ['94'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 8869. ";
 preguntaids[7] = 8869


//  Id pregunta: 6092 Año de creación de pregunta: 2003
 questions[8]= "9)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[8]= new Array();
 choices[8][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[8][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[8][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[8][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[8] = 1;
 units[8] = ['107'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 6092. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6092


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[9]= "10)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[9]= new Array();
 choices[9][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[9][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[9][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[9][3] = "Todas son ciertas";
 answers[9] = 3;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[9] = 3475


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[10]= new Array();
 choices[10][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[10][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[10][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[10][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[10] = 2;
 units[10] = ['12'];
 blocks[10] = ['A3'];
 comments[10] = "Id Pregunta: 334. Modelo econ&oacute;mico";
 preguntaids[10] = 334


//  Id pregunta: 4178 Año de creación de pregunta: 2006
 questions[11]= "12)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos:";
 choices[11]= new Array();
 choices[11][0] = "SA/SD";
 choices[11][1] = "OMT";
 choices[11][2] = "Proceso Unificado de modelado";
 choices[11][3] = "Tarjetas de clase";
 answers[11] = 0;
 units[11] = ['85'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4178. ";
 preguntaids[11] = 4178


//  Id pregunta: 8476 Año de creación de pregunta: 2011
 questions[12]= "13)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[12]= new Array();
 choices[12][0] = "2965";
 choices[12][1] = "8080";
 choices[12][2] = "1065";
 choices[12][3] = "1265";
 answers[12] = 0;
 units[12] = ['103'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8476. ";
 preguntaids[12] = 8476


//  Id pregunta: 2423 Año de creación de pregunta: 2006
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes alternativas no se puede contratar a trav&eacute;s del cat&aacute;logo cat&aacute;logo de bienes y servicios de contrataci&oacute;n centralizada?";
 choices[13]= new Array();
 choices[13][0] = "Distintos paquetes SW de bases de datos.";
 choices[13][1] = "DIferentes servidores de aplicaciones.";
 choices[13][2] = "Servicios externos de desarrollo software con distintos proveedores.";
 choices[13][3] = "Servicios de comunicaciones con distintos operadores.";
 answers[13] = 3;
 units[13] = ['39'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2423. ";
 preguntaids[13] = 2423


//  Id pregunta: 2219 Año de creación de pregunta: 2002
 questions[14]= "15)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[14]= new Array();
 choices[14][0] = "Aceptar el riesgo";
 choices[14][1] = "Evitar el riesgo";
 choices[14][2] = "Traspasar el riesgo";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = 1;
 units[14] = ['45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2219. ";
 preguntaids[14] = 2219


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[15]= "16)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[15]= new Array();
 choices[15][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[15][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[15][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[15][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sistema Nacional de Salud.";
 answers[15] = 2;
 units[15] = ['47'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 635. Estado del Bienestar";
 preguntaids[15] = 635


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la falsa. De acuerdo con la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos y de Certificados de la Administraci&oacute;n, para validar la firma electr&oacute;nica:";
 choices[16]= new Array();
 choices[16][0] = "El primer sello de tiempo dentro de la estructura de la firma se utilizar&aacute; para determinar la fecha de la firma/sello.";
 choices[16][1] = "En caso de que no existan sellos de tiempo, la fecha y hora de la firma no se utilizar&aacute;n para determinar el momento en que se realiz&oacute; la firma.";
 choices[16][2] = "En caso de que no existan sellos de tiempo en la firma, la validaci&oacute;n del certificado se realizar&aacute; en el momento de la validaci&oacute;n de la firma/sello.";
 choices[16][3] = "El campo &quot;certificado del firmante&quot; se utilizar&aacute; para verificar el estado del certificado, y en su caso la cadena de certificaci&oacute;n, en la fecha de la generaci&oacute;n de la firma/sello.";
 answers[16] = 0;
 units[16] = ['43'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 598. NTI";
 preguntaids[16] = 598


//  Id pregunta: 3778 Año de creación de pregunta: 2002
 questions[17]= "18)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[17]= new Array();
 choices[17][0] = "Modelo de referencia";
 choices[17][1] = "Perfil de riesgos";
 choices[17][2] = "Foco de inter&eacute;s";
 choices[17][3] = "Establecimiento de la tipolog&iacute;a";
 answers[17] = 3;
 units[17] = ['93'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 3778. ";
 preguntaids[17] = 3778


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[18]= "19)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[18]= new Array();
 choices[18][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[18][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[18][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[18][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[18] = 3;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[18] = 2514


//  Id pregunta: 8671 Año de creación de pregunta: 2013
 questions[19]= "20)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[19]= new Array();
 choices[19][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[19][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[19][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso, es equivalente a replicaci&oacute;n discreta.";
 choices[19][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[19] = 3;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8671. Examen TIC A1 2011";
 preguntaids[19] = 8671


//  Id pregunta: 8948 Año de creación de pregunta: 2013
 questions[20]= "21)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[20]= new Array();
 choices[20][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[20][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[20][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[20][3] = "Todas las anteriores son falsas";
 answers[20] = 0;
 units[20] = ['62'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8948. ";
 preguntaids[20] = 8948


//  Id pregunta: 9963 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;En cu&aacute;l de los siguientes pueden participar actores del sector privado?";
 choices[21]= new Array();
 choices[21][0] = "El Consejo de Seguridad Nacional.";
 choices[21][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[21][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[21][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[21] = 1;
 units[21] = ['46'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 9963. ";
 preguntaids[21] = 9963


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Con otra expresi&oacute;n m&aacute;s familiar es com&uacute;nmente conocido el Consejo de la Uni&oacute;n Europea?";
 choices[22]= new Array();
 choices[22][0] = "Parlamento Europeo";
 choices[22][1] = "Consejo de Jefes de Estado";
 choices[22][2] = "Consejo de Jefes de Estado y de Gobierno";
 choices[22][3] = "Consejo de Ministros";
 answers[22] = 3;
 units[22] = ['5'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 180. Uni&oacute;n Europea";
 preguntaids[22] = 180


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[23]= new Array();
 choices[23][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[23][1] = "Excesiva estabilidad de empleo";
 choices[23][2] = "An&eacute;mico crecimiento de la productividad";
 choices[23][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[23] = 1;
 units[23] = ['12'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 339. Modelo econ&oacute;mico";
 preguntaids[23] = 339


//  Id pregunta: 7798 Año de creación de pregunta: 2010
 questions[24]= "25)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[24]= new Array();
 choices[24][0] = "Un determinado virus inform&aacute;tico.";
 choices[24][1] = "Difusi&oacute;n masiva de noticias falsas.";
 choices[24][2] = "Suplantaci&oacute;n fraudulenta que intenta conseguir informaci&oacute;n valiosa.";
 choices[24][3] = "Reenv&iacute;o de mensajes a mucha gente.";
 answers[24] = 2;
 units[24] = ['120'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7798. ";
 preguntaids[24] = 7798


//  Id pregunta: 2554 Año de creación de pregunta: 2005
 questions[25]= "26)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[25]= new Array();
 choices[25][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[25][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[25][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[25][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[25] = 2;
 units[25] = ['76'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2554. ";
 preguntaids[25] = 2554


//  Id pregunta: 2664 Año de creación de pregunta: 2003
 questions[26]= "27)  &iquest;Puede ejecutarse una aplicaci&oacute;n Windows al mismo tiempo por muchos usuarios, en una misma m&aacute;quina, pero con pantallas diferentes?:";
 choices[26]= new Array();
 choices[26][0] = "No, dado que un sistema de este tipo solo puede tener una consola, esa prestaci&oacute;n est&aacute; accesible en sistemas empresariales tipo Unix";
 choices[26][1] = "Si, dado que en un servidor windows empresarial pueden conectarse varias consolas diferentes";
 choices[26][2] = "Si, utilizando X-Windows";
 choices[26][3] = "Si, utilizando servicios de Remote Desktop";
 answers[26] = 3;
 units[26] = ['55'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 2664. ";
 preguntaids[26] = 2664


//  Id pregunta: 6731 Año de creación de pregunta: 2009
 questions[27]= "28)  &iquest;Qu&eacute; tecnolog&iacute;a de las siguientes es m&aacute;s adecuada para generar contenido HTML din&aacute;mico en una aplicaci&oacute;n Java EE?";
 choices[27]= new Array();
 choices[27][0] = "Servlets";
 choices[27][1] = "JSP";
 choices[27][2] = "JNI";
 choices[27][3] = "JAXP";
 answers[27] = 1;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6731. ";
 preguntaids[27] = 6731


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[28]= new Array();
 choices[28][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[28][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[28][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[28][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[28] = 1;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 447. Agenda Digital";
 preguntaids[28] = 447


//  Id pregunta: 9904 Año de creación de pregunta: 2015
 questions[29]= "30)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[29]= new Array();
 choices[29][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[29][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[29][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[29][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[29] = 1;
 units[29] = ['7', '19'];
 blocks[29] = ['A2', 'A4'];
 comments[29] = "Id Pregunta: 9904. ";
 preguntaids[29] = 9904


//  Id pregunta: 9631 Año de creación de pregunta: 2014
 questions[30]= "31)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[30]= new Array();
 choices[30][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 choices[30][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[30][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[30][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital y AENOR";
 answers[30] = 1;
 units[30] = ['48'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 9631. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo.";
 preguntaids[30] = 9631


//  Id pregunta: 8555 Año de creación de pregunta: 2013
 questions[31]= "32)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[31]= new Array();
 choices[31][0] = "Estar documentado correctamente";
 choices[31][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[31][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[31][3] = "Ser original";
 answers[31] = 3;
 units[31] = ['41'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 8555. ";
 preguntaids[31] = 8555


//  Id pregunta: 10710 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[32]= new Array();
 choices[32][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[32][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[32][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[32][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[32] = 2;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10710. ";
 preguntaids[32] = 10710


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[33]= "34)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[33]= new Array();
 choices[33][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[33][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[33][2] = "A y B son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = 2;
 units[33] = ['4', '7', '8', '9'];
 blocks[33] = ['A1', 'A2'];
 comments[33] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[33] = 1040


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[34]= "35)  Componen la Comisi&oacute;n Europea:";
 choices[34]= new Array();
 choices[34][0] = "Un Comisario por cada Estado miembro.";
 choices[34][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[34][2] = "Dos Comisarios por cada Estado miembro.";
 choices[34][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[34] = 0;
 units[34] = ['5'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 127. Uni&oacute;n Europea";
 preguntaids[34] = 127


//  Id pregunta: 1427 Año de creación de pregunta: 2016
 questions[35]= "36)  De conformidad con el art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola el Gobierno se compone:";
 choices[35]= new Array();
 choices[35][0] = "Del Presidente, de los Vicepresidentes y de los dem&aacute;s miembros que establezca la ley.";
 choices[35][1] = "Del Presidente, de los Ministros, y de los dem&aacute;s miembros que establezca la ley.";
 choices[35][2] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y de los dem&aacute;s miembros que establezca la ley.";
 choices[35][3] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y los Secretarios Generales y de los dem&aacute;s miembros que establezca la ley.";
 answers[35] = 2;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 1427. ";
 preguntaids[35] = 1427


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[36]= new Array();
 choices[36][0] = "En 1988.";
 choices[36][1] = "En 1981.";
 choices[36][2] = "En 1982.";
 choices[36][3] = "En 1986.";
 answers[36] = 3;
 units[36] = ['5'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 193. Uni&oacute;n Europea";
 preguntaids[36] = 193


//  Id pregunta: 9900 Año de creación de pregunta: 2015
 questions[37]= "38)  La Ley 39/2015 impone:";
 choices[37]= new Array();
 choices[37][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[37][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[37][2] = "Ambas";
 choices[37][3] = "Ninguna de las anteriores.";
 answers[37] = 0;
 units[37] = ['7', '19'];
 blocks[37] = ['A2', 'A4'];
 comments[37] = "Id Pregunta: 9900. ";
 preguntaids[37] = 9900


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[38]= new Array();
 choices[38][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[38][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[38][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[38][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[38] = 1;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[38] = 452


//  Id pregunta: 9531 Año de creación de pregunta: 2014
 questions[39]= "40)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[39]= new Array();
 choices[39][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[39][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[39][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[39][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[39] = 1;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 9531. ";
 preguntaids[39] = 9531


//  Id pregunta: 5052 Año de creación de pregunta: 2002
 questions[40]= "41)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[40]= new Array();
 choices[40][0] = "sobre, cabeceras y cuerpo";
 choices[40][1] = "cabeceras, cuerpo y cola";
 choices[40][2] = "sobre, cabeceras, cuerpo y cola";
 choices[40][3] = "cabeceras y cuerpo";
 answers[40] = 0;
 units[40] = ['116'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5052. ";
 preguntaids[40] = 5052


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[41]= "42)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[41]= new Array();
 choices[41][0] = "De los interesados en el procedimiento";
 choices[41][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[41][2] = "Disposiciones generales";
 choices[41][3] = "De los actos administrativos";
 answers[41] = 2;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[41] = 220


//  Id pregunta: 4133 Año de creación de pregunta: 2003
 questions[42]= "43)  M&eacute;todo de interpolaci&oacute;n en la correcci&oacute;n geom&eacute;trica:";
 choices[42]= new Array();
 choices[42][0] = "Vecino m&aacute;s pr&oacute;ximo.";
 choices[42][1] = "Bilineal.";
 choices[42][2] = "Bic&uacute;bica.";
 choices[42][3] = "Todos los anteriores.";
 answers[42] = 3;
 units[42] = ['100'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4133. ";
 preguntaids[42] = 4133


//  Id pregunta: 10114 Año de creación de pregunta: 2015
 questions[43]= "44)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[43]= new Array();
 choices[43][0] = "6 Gbps.";
 choices[43][1] = "16 Gbps.";
 choices[43][2] = "8 Gbps.";
 choices[43][3] = "3 Gbps.";
 answers[43] = 1;
 units[43] = ['50', '51', '53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 10114. Examen TIC A2 2014";
 preguntaids[43] = 10114


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[44]= "45)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[44]= new Array();
 choices[44][0] = "Dividir la red en subredes";
 choices[44][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[44][2] = "Dividir la red en VLANs";
 choices[44][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[44] = 3;
 units[44] = ['102'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 1902. ";
 preguntaids[44] = 1902


//  Id pregunta: 7456 Año de creación de pregunta: 2010
 questions[45]= "46)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[45]= new Array();
 choices[45][0] = "Integridad";
 choices[45][1] = "Confidencialidad";
 choices[45][2] = "No Repudio";
 choices[45][3] = "Disponibilidad";
 answers[45] = 0;
 units[45] = ['76'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7456. ";
 preguntaids[45] = 7456


//  Id pregunta: 9347 Año de creación de pregunta: 2014
 questions[46]= "47)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[46]= new Array();
 choices[46][0] = "Es Iterativo e Incremental.";
 choices[46][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[46][2] = "Est&aacute; enfocado en los riesgos.";
 choices[46][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[46] = 3;
 units[46] = ['82'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 9347. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[46] = 9347


//  Id pregunta: 8088 Año de creación de pregunta: 2011
 questions[47]= "48)  Con el fin de garantizar que las aplicaciones comerciales y las herramientas desarrolladas a medida, se encuentren alineadas con las necesidades del negocio, el est&aacute;ndar COBIT, define 7 procesos a seguir &iquest;en cu&aacute;l de los cuatro dominios que utiliza COBIT para clasificar los procesos de negocio, se encuentran incluidos?:";
 choices[47]= new Array();
 choices[47][0] = "Planificaci&oacute;n y Organizaci&oacute;n";
 choices[47][1] = "Supervisi&oacute;n y Evaluaci&oacute;n";
 choices[47][2] = "Adquisici&oacute;n e Implementaci&oacute;n";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = 2;
 units[47] = ['101'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 8088. Analista Ayto. Madrid 2010";
 preguntaids[47] = 8088


//  Id pregunta: 8424 Año de creación de pregunta: 2011
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[48]= new Array();
 choices[48][0] = "Ley 18/2011";
 choices[48][1] = "Ley 39/2015";
 choices[48][2] = "Las dos anteriores";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = 1;
 units[48] = ['7'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 8424. ";
 preguntaids[48] = 8424


//  Id pregunta: 2475 Año de creación de pregunta: 2009
 questions[49]= "50)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de:";
 choices[49]= new Array();
 choices[49][0] = "3 meses";
 choices[49][1] = "6 meses";
 choices[49][2] = "12 meses";
 choices[49][3] = "2 a&ntilde;os";
 answers[49] = 3;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 2475. ";
 preguntaids[49] = 2475


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[50]= new Array();
 choices[50][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[50][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[50][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[50][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[50] = 0;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 253. Ley 39/2015";
 preguntaids[50] = 253


//  Id pregunta: 9084 Año de creación de pregunta: 2014
 questions[51]= "52)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[51]= new Array();
 choices[51][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[51][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[51][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[51][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[51] = 3;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 9084. Examen TIC-A1 2013";
 preguntaids[51] = 9084


//  Id pregunta: 7302 Año de creación de pregunta: 2010
 questions[52]= "53)  En cuanto al acceso a datos personales a trav&eacute;s de redes de comunicaciones:";
 choices[52]= new Array();
 choices[52][0] = "Debe llevarse a cabo a trav&eacute;s de t&eacute;cnicas de cifrado";
 choices[52][1] = "Deber&aacute;n garantizar un nivel de seguridad equivalente al correspondiente a los accesos en modo local";
 choices[52][2] = "Debe permitir el registro de todos los accesos a los datos, guardando, hora, fecha, usuario y fichero accedido.";
 choices[52][3] = "Todas las respuestas anteriores son correctas";
 answers[52] = 1;
 units[52] = ['79'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7302. ";
 preguntaids[52] = 7302


//  Id pregunta: 4151 Año de creación de pregunta: 2006
 questions[53]= "54)  En el modelo de ciclo de vida en espiral:";
 choices[53]= new Array();
 choices[53][0] = "La dimensi&oacute;n radial indica los costes y la angular el progreso";
 choices[53][1] = "La dimensi&oacute;n angular indica los costes y la radial el progreso";
 choices[53][2] = "La dimensi&oacute;n lineal indica los costes y la angular el progreso";
 choices[53][3] = "La dimensi&oacute;n radial indica los costes y la angular el riesgo";
 answers[53] = 0;
 units[53] = ['82'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 4151. ";
 preguntaids[53] = 4151


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[54]= new Array();
 choices[54][0] = "Ford";
 choices[54][1] = "Google";
 choices[54][2] = "Toyota";
 choices[54][3] = "Facebook";
 answers[54] = 2;
 units[54] = ['34'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 554. Metodologias Lean";
 preguntaids[54] = 554


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[55]= "56)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[55]= new Array();
 choices[55][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[55][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[55][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[55][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[55] = 2;
 units[55] = ['1'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 83. Constituci&oacute;n de 1978";
 preguntaids[55] = 83


//  Id pregunta: 10386 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "Crecimiento inteligente";
 choices[56][1] = "Crecimiento sostenible";
 choices[56][2] = "Crecimiento innovador";
 choices[56][3] = "Crecimiento integrador";
 answers[56] = 0;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 10386. ";
 preguntaids[56] = 10386


//  Id pregunta: 2985 Año de creación de pregunta: 2002
 questions[57]= "58)  Los servlets:";
 choices[57]= new Array();
 choices[57][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[57][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[57][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = 0;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2985. ";
 preguntaids[57] = 2985


//  Id pregunta: 9609 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Cual no es un lenguaje de scripting?";
 choices[58]= new Array();
 choices[58][0] = "JScript";
 choices[58][1] = "Node.js";
 choices[58][2] = "Groovy";
 choices[58][3] = "Hack";
 answers[58] = 1;
 units[58] = ['62'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9609. Node.js es un entorno de desarrollo, no un lenguaje";
 preguntaids[58] = 9609


//  Id pregunta: 9832 Año de creación de pregunta: 2015
 questions[59]= "60)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[59]= new Array();
 choices[59][0] = "OLAP";
 choices[59][1] = "OLTP";
 choices[59][2] = "ETL";
 choices[59][3] = "OLTA";
 answers[59] = 0;
 units[59] = ['72'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9832. ";
 preguntaids[59] = 9832


//  Id pregunta: 1961 Año de creación de pregunta: 2016
 questions[60]= "61)  EI modelo CMMI (Capability Maturity Model Integration) es:";
 choices[60]= new Array();
 choices[60][0] = "Un modelo para la mejora en la obtenci&oacute;n de datos internos de la organizaci&oacute;n.";
 choices[60][1] = "Un modelo para la mejora y evaluaci&oacute;n de procesos para el desarrollo, mantenimiento y operaci&oacute;n de sistemas de software.";
 choices[60][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n.";
 choices[60][3] = "Un modelo para la mejora de la consistencia de los datos de la organizaci&oacute;n.";
 answers[60] = 1;
 units[60] = ['93'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 1961. ";
 preguntaids[60] = 1961


//  Id pregunta: 2314 Año de creación de pregunta: 2002
 questions[61]= "62)  Un ejemplo de infracci&oacute;n grave es:";
 choices[61]= new Array();
 choices[61][0] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos sean recabados del propio interesado.";
 choices[61][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[61][2] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[61][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un requerimiento previo del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[61] = 1;
 units[61] = ['35'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2314. A: Leve; C y D: Muy graves";
 preguntaids[61] = 2314


//  Id pregunta: 1248 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[62]= new Array();
 choices[62][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[62][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[62][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[62][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[62] = 3;
 units[62] = ['117'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1248. ";
 preguntaids[62] = 1248


//  Id pregunta: 8834 Año de creación de pregunta: 2013
 questions[63]= "64)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[63]= new Array();
 choices[63][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[63][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP.";
 choices[63][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP.";
 choices[63][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[63] = 1;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8834. ";
 preguntaids[63] = 8834


//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[64]= "65)  Seg&uacute;n la Ley 25/2013:";
 choices[64]= new Array();
 choices[64][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[64][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[64][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[64][3] = "Todas las anteriores son correctas";
 answers[64] = 3;
 units[64] = ['10'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 10815. ";
 preguntaids[64] = 10815


//  Id pregunta: 8580 Año de creación de pregunta: 2013
 questions[65]= "66)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[65]= new Array();
 choices[65][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[65][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[65][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[65][3] = "Ninguna respuesta es correcta.";
 answers[65] = 1;
 units[65] = ['50'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8580. ";
 preguntaids[65] = 8580


//  Id pregunta: 4122 Año de creación de pregunta: 2003
 questions[66]= "67)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[66]= new Array();
 choices[66][0] = "Papel";
 choices[66][1] = "Fax";
 choices[66][2] = "Correo electr&oacute;nico.";
 choices[66][3] = "Todos los anteriores.";
 answers[66] = 3;
 units[66] = ['81'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 4122. ";
 preguntaids[66] = 4122


//  Id pregunta: 5888 Año de creación de pregunta: 2007
 questions[67]= "68)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[67]= new Array();
 choices[67][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[67][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[67][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = 3;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 5888. Ley 56/2007";
 preguntaids[67] = 5888


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[68]= "69)  El formato de archivos utilizado por el sistema operativo iOS para las aplicaciones en dispositivos m&oacute;viles Apple:";
 choices[68]= new Array();
 choices[68][0] = ".ipa";
 choices[68][1] = ".app";
 choices[68][2] = ".apk";
 choices[68][3] = ".ark";
 answers[68] = 0;
 units[68] = ['59'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 680. AGE A2 2015";
 preguntaids[68] = 680


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[69]= new Array();
 choices[69][0] = "Tres a&ntilde;os.";
 choices[69][1] = "Cuatro a&ntilde;os.";
 choices[69][2] = "Cinco a&ntilde;os.";
 choices[69][3] = "Seis a&ntilde;os.";
 answers[69] = 3;
 units[69] = ['5'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[69] = 143


//  Id pregunta: 8134 Año de creación de pregunta: 2011
 questions[70]= "71)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[70]= new Array();
 choices[70][0] = "Cualquier valor negativo.";
 choices[70][1] = "Fq=0.";
 choices[70][2] = "Fq=1.";
 choices[70][3] = "Infinito.";
 answers[70] = 2;
 units[70] = ['99'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 8134. Examen TIC A2 2010 interna";
 preguntaids[70] = 8134


//  Id pregunta: 2536 Año de creación de pregunta: 2004
 questions[71]= "72)  La orden chmod";
 choices[71]= new Array();
 choices[71][0] = "bloquea un archivo en windows";
 choices[71][1] = "cambia los permisos de un achivo en linux - unix";
 choices[71][2] = "crea un directorio modificable en unix";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = 1;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2536. ";
 preguntaids[71] = 2536


//  Id pregunta: 3085 Año de creación de pregunta: 2002
 questions[72]= "73)  Un sistema IBM z/Series:";
 choices[72]= new Array();
 choices[72][0] = "Puede ejecutar Linux";
 choices[72][1] = "Puede ejecutar OS/400";
 choices[72][2] = "Puede ejecutar Windows 2000";
 choices[72][3] = "Todas son ciertas";
 answers[72] = 0;
 units[72] = ['49'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3085. ";
 preguntaids[72] = 3085


//  Id pregunta: 5586 Año de creación de pregunta: 2007
 questions[73]= "74)  Un protocolo de comunicaci&oacute;n es:";
 choices[73]= new Array();
 choices[73][0] = "conjunto de reglas que gobiernan el formato de intercambio de mensajes entre niveles OSI de un mismo sistema.";
 choices[73][1] = "El conjunto de reglas que gobiernan c&oacute;mo va a proceder la comunicaci&oacute;n entre entidades pares de distintos sistemas.";
 choices[73][2] = "El conjunto de elementos f&iacute;sicos y l&oacute;gicos que relacionan dos niveles adyacentes de un sistema.";
 choices[73][3] = "Conjunto de primitivas y par&aacute;metros que concretan los servicios que se proporcionan a trav&eacute;s de la interfaz.";
 answers[73] = 1;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5586. ";
 preguntaids[73] = 5586


//  Id pregunta: 5491 Año de creación de pregunta: 2007
 questions[74]= "75)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[74]= new Array();
 choices[74][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[74][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[74][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[74][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[74] = 1;
 units[74] = ['30'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 5491. ";
 preguntaids[74] = 5491


