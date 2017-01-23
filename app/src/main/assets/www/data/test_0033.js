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
//  Id pregunta: 10545 Año de creación de pregunta: 2015
 questions[0]= "1)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[0]= new Array();
 choices[0][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[0][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[0][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[0][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[0] = 0;
 units[0] = ['75'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 10545. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";
 preguntaids[0] = 10545


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[1]= "2)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[1]= new Array();
 choices[1][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[1][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[1][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[1][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[1] = 2;
 units[1] = ['7'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 242. Ley 39/2015";
 preguntaids[1] = 242


//  Id pregunta: 10934 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[2]= new Array();
 choices[2][0] = "representante del Tribunal de Cuentas";
 choices[2][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[2][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[2][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[2] = 2;
 units[2] = ['22'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 10934. ";
 preguntaids[2] = 10934


//  Id pregunta: 2883 Año de creación de pregunta: 2002
 questions[3]= "4)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[3]= new Array();
 choices[3][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[3][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[3][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[3][3] = "Todas las anteriores son ciertas";
 answers[3] = 1;
 units[3] = ['64', '65'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2883. ";
 preguntaids[3] = 2883


//  Id pregunta: 8061 Año de creación de pregunta: 2011
 questions[4]= "5)  &iquest;Qu&eacute; tipo de conector de alta velocidad (anteriormente conocido por su nombre clave Light Peak) hace uso de la tecnolog&iacute;a &oacute;ptica llegando a ofrecer anchos de banda de hasta 10 Gbps?";
 choices[4]= new Array();
 choices[4][0] = "FireWire";
 choices[4][1] = "Thunderbolt";
 choices[4][2] = "USB";
 choices[4][3] = "HDMI";
 answers[4] = 1;
 units[4] = ['51'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8061. ";
 preguntaids[4] = 8061


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[5]= new Array();
 choices[5][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[5][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[5][2] = "A y B son correctas.";
 choices[5][3] = "A y B son incorrectas.";
 answers[5] = 2;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[5] = 1040


//  Id pregunta: 10798 Año de creación de pregunta: 2015
 questions[6]= "7)  El n&uacute;mero m&iacute;nimo de discos necesarios en RAID 6 es:";
 choices[6]= new Array();
 choices[6][0] = "2";
 choices[6][1] = "3";
 choices[6][2] = "4";
 choices[6][3] = "5";
 answers[6] = 2;
 units[6] = ['53'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10798. ";
 preguntaids[6] = 10798


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[7]= new Array();
 choices[7][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[7][1] = "Directiva 2004/113/CE del Consejo.";
 choices[7][2] = "Todas son correctas.";
 choices[7][3] = "Todas son falsas.";
 answers[7] = 2;
 units[7] = ['14'];
 blocks[7] = ['A3'];
 comments[7] = "Id Pregunta: 385. Pol&iacute;ticas de igualdad";
 preguntaids[7] = 385


//  Id pregunta: 9745 Año de creación de pregunta: 2014
 questions[8]= "9)  Seg&uacute;n el modelo de madurez de Cloud Computing de Forrester, el nivel en el que el proveedor de SaaS ha creado un software espec&iacute;fico para tal prop&oacute;sito y que emplea, entre otras, la tenencia m&uacute;ltiple, es:";
 choices[8]= new Array();
 choices[8][0] = "Nivel 1";
 choices[8][1] = "Nivel 2";
 choices[8][2] = "Nivel 3";
 choices[8][3] = "Nivel 4";
 answers[8] = 2;
 units[8] = ['52'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9745. http://blogs.msdn.com/b/architectsrule/archive/2008/08/18/saas-maturity-model-according-to-forrester.aspx";
 preguntaids[8] = 9745


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[9]= "10)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[9]= new Array();
 choices[9][0] = "786 Diputados como m&aacute;ximo.";
 choices[9][1] = "600 Diputados como m&aacute;ximo.";
 choices[9][2] = "650 Diputados como m&aacute;ximo.";
 choices[9][3] = "732 Diputados como m&aacute;ximo.";
 answers[9] = 0;
 units[9] = ['5'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 183. Uni&oacute;n Europea";
 preguntaids[9] = 183


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[10]= "11)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[10]= new Array();
 choices[10][0] = "En sentencias switch para alterar el control de flujo.";
 choices[10][1] = "Para manejar excepciones.";
 choices[10][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[10][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[10] = 1;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 718. Junta de Extremadura A1 2015";
 preguntaids[10] = 718


//  Id pregunta: 4049 Año de creación de pregunta: 2003
 questions[11]= "12)  La eliminaci&oacute;n del efecto onda que provocan los cambios introducidos por una petici&oacute;n de mantenimiento de un sistema de informaci&oacute;n se consigne:";
 choices[11]= new Array();
 choices[11][0] = "Con la definici&oacute;n de los puntos de control adecuados en el plan de mantenimiento de sistemas de informaci&oacute;n.";
 choices[11][1] = "A trav&eacute;s de las pruebas de regresi&oacute;n.";
 choices[11][2] = "Con el seguimiento de las referencias cruzadas de los elementos afectados por los cambios.";
 choices[11][3] = "Con la planificaci&oacute;n detallada del desarrollo de los cambios.";
 answers[11] = 1;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4049. Junta Andaluc&iacute;a";
 preguntaids[11] = 4049


//  Id pregunta: 1415 Año de creación de pregunta: 2016
 questions[12]= "13)  El d&iacute;a 29 de diciembre del a&ntilde;o 1978, la Constituci&oacute;n Espa&ntilde;ola fue:";
 choices[12]= new Array();
 choices[12][0] = "Sancionada y promulgada por el Rey.";
 choices[12][1] = "Aprobada por los Plenos del Congreso y el Senado.";
 choices[12][2] = "Ratificada mediante refer&eacute;ndum por el pueblo espa&ntilde;ol.";
 choices[12][3] = "Ninguna es correcta.";
 answers[12] = 3;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 1415. ";
 preguntaids[12] = 1415


//  Id pregunta: 9163 Año de creación de pregunta: 2014
 questions[13]= "14)  La norma ISO/IEC 27002 es un conjunto de controles de seguridad para sistemas de informaci&oacute;n gen&eacute;ricos. Esta norma est&aacute; relacionada con el Esquema Nacional de Seguridad (ENS). Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[13]= new Array();
 choices[13][0] = "Numerosas medidas de seguridad del ENS coinciden con controles de ISO/IEC 27002.";
 choices[13][1] = "El ENS es m&aacute;s preciso que la norma ISO/IEC 27002 y establece un sistema de protecci&oacute;n proporcionado a la informaci&oacute;n y servicios a proteger para racionalizar la implantaci&oacute;n de medidas de seguridad y reducir la discrecionalidad.";
 choices[13][2] = "La norma ISO/IEC 27002 carece de la proporcionalidad del ENS, quedando a la mejor opini&oacute;n del auditor que certifica la conformidad con ISO/IEC 27001. La certificaci&oacute;n de la conformidad con ISO/IEC 27001 no es obligatoria en el ENS.";
 choices[13][3] = "Tanto la norma ISO/IEC 27002 como el ENS contemplan diversos aspectos relativos a la firma o la autenticaci&oacute;n electr&oacute;nica.";
 answers[13] = 3;
 units[13] = ['79'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9163. Examen TIC A2 2013";
 preguntaids[13] = 9163


//  Id pregunta: 10069 Año de creación de pregunta: 2015
 questions[14]= "15)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[14]= new Array();
 choices[14][0] = "grep error log.txt | wc &ndash;l";
 choices[14][1] = "grep wc &ndash;l |error log.txt";
 choices[14][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[14][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[14] = 0;
 units[14] = ['57'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 10069. Examen TIC A2 2014";
 preguntaids[14] = 10069


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[15]= new Array();
 choices[15][0] = "3 pilares";
 choices[15][1] = "4 pilares";
 choices[15][2] = "5 pilares";
 choices[15][3] = "7 pilares";
 answers[15] = 0;
 units[15] = ['17'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 436. Mercado &Uacute;nico Digital";
 preguntaids[15] = 436


//  Id pregunta: 5327 Año de creación de pregunta: 2006
 questions[16]= "17)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[16]= new Array();
 choices[16][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[16][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[16][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[16][3] = "Barrido ICMP (ICMP Scanning)";
 answers[16] = 2;
 units[16] = ['113'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5327. ";
 preguntaids[16] = 5327


//  Id pregunta: 9451 Año de creación de pregunta: 2014
 questions[17]= "18)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[17]= new Array();
 choices[17][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[17][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a la adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[17][2] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo al plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n";
 choices[17][3] = "Todas son verdaderas";
 answers[17] = 3;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 9451. ";
 preguntaids[17] = 9451


//  Id pregunta: 10936 Año de creación de pregunta: 2015
 questions[18]= "19)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[18]= new Array();
 choices[18][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[18][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[18][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[18][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[18] = 3;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 10936. ";
 preguntaids[18] = 10936


//  Id pregunta: 5515 Año de creación de pregunta: 2007
 questions[19]= "20)  &iquest;Qu&eacute; se entiende por servicio universal, seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[19]= new Array();
 choices[19][0] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica.";
 choices[19][1] = "Que los usuarios finales con discapacidad tengan acceso a los mismos servicios que el resto de los usuarios finales.";
 choices[19][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[19][3] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados.";
 answers[19] = 2;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5515. ";
 preguntaids[19] = 5515


//  Id pregunta: 4979 Año de creación de pregunta: 2002
 questions[20]= "21)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[20]= new Array();
 choices[20][0] = "RJ11";
 choices[20][1] = "RJ45";
 choices[20][2] = "RJ37";
 choices[20][3] = "V.24";
 answers[20] = 1;
 units[20] = ['104'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4979. ";
 preguntaids[20] = 4979


//  Id pregunta: 7118 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[21]= new Array();
 choices[21][0] = "No";
 choices[21][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[21][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[21][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[21] = 2;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 7118. Art&iacute;culo 3.3 RD 1671/2009";
 preguntaids[21] = 7118


//  Id pregunta: 5739 Año de creación de pregunta: 2007
 questions[22]= "23)  &iquest;Qu&eacute; herramienta se utilliza en Reports 2.5 para dise&ntilde;ar las consultas en las que se basa un informe?";
 choices[22]= new Array();
 choices[22][0] = "QUERY MODEL";
 choices[22][1] = "DATA MODEL";
 choices[22][2] = "STRUCT MODEL";
 choices[22][3] = "REPORT MODEL";
 answers[22] = 1;
 units[22] = ['72'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 5739. ";
 preguntaids[22] = 5739


//  Id pregunta: 9149 Año de creación de pregunta: 2014
 questions[23]= "24)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[23]= new Array();
 choices[23][0] = "find -type f | xwygs grep &quot;libro&quot;";
 choices[23][1] = "find -type f | xaygs grep &quot;libro&quot;";
 choices[23][2] = "find -type f | xargs grep &quot;libro&quot;";
 choices[23][3] = "find -type f | xargp grep &quot;libro&quot;";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 9149. Examen TIC A2 2013";
 preguntaids[23] = 9149


//  Id pregunta: 4641 Año de creación de pregunta: 2002
 questions[24]= "25)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[24]= new Array();
 choices[24][0] = "registro de incidencias";
 choices[24][1] = "fichero de log";
 choices[24][2] = "lista de errores";
 choices[24][3] = "fichero de registros";
 answers[24] = 1;
 units[24] = ['113'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4641. ";
 preguntaids[24] = 4641


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[25]= new Array();
 choices[25][0] = "B&aacute;sico, medio y alto";
 choices[25][1] = "D&eacute;bil y fuerte";
 choices[25][2] = "Bajo, medio y alto";
 choices[25][3] = "Bajo, sustancial y alto";
 answers[25] = 3;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 783. Reglamento 910/2014";
 preguntaids[25] = 783


//  Id pregunta: 7132 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;Cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n, cuando el autor de un programa de ordenador sea una persona jur&iacute;dica?";
 choices[26]= new Array();
 choices[26][0] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 choices[26][1] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[26][2] = "Setenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[26][3] = "Cincuenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 answers[26] = 2;
 units[26] = ['41'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 7132. Art&iacute;culo 98 RDL 1/1996";
 preguntaids[26] = 7132


//  Id pregunta: 4995 Año de creación de pregunta: 2002
 questions[27]= "28)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[27]= new Array();
 choices[27][0] = "Adaptativos y redundantes";
 choices[27][1] = "Tipo 'source routing'";
 choices[27][2] = "Tipo 'spanning tree'";
 choices[27][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[27] = 2;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4995. ";
 preguntaids[27] = 4995


//  Id pregunta: 2105 Año de creación de pregunta: 2002
 questions[28]= "29)  El nivel de adecuaci&oacute;n AA indica:";
 choices[28]= new Array();
 choices[28][0] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1";
 choices[28][1] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1 y 2";
 choices[28][2] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2 y 3";
 choices[28][3] = "que se satisfacen todos los puntos de verificaci&oacute;n de prioridad 1, 2, 3 y 4";
 answers[28] = 1;
 units[28] = ['42'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2105. ";
 preguntaids[28] = 2105


//  Id pregunta: 8230 Año de creación de pregunta: 2011
 questions[29]= "30)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[29]= new Array();
 choices[29][0] = "Bluetooth";
 choices[29][1] = "HomeRF";
 choices[29][2] = "HiperLAN/2";
 choices[29][3] = "IrLMP";
 answers[29] = 1;
 units[29] = ['108'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 8230. Examen UPM A2 2011";
 preguntaids[29] = 8230


//  Id pregunta: 1781 Año de creación de pregunta: 2016
 questions[30]= "31)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;les de los siguientes procesos incluye la necesidad de realizar una Evaluaci&oacute;n y Gesti&oacute;n de Riesgo? 1. Gesti&oacute;n de Continuidad de Servicios de TI 2. Gesti&oacute;n de Seguridad de la Informaci&oacute;n 3. Gesti&oacute;n del Nivel de Servicio";
 choices[30]= new Array();
 choices[30][0] = "Todos.";
 choices[30][1] = "S&oacute;lo 1 y 3.";
 choices[30][2] = "S&oacute;lo 2 y 3.";
 choices[30][3] = "S&oacute;lo 1 y 2.";
 answers[30] = 3;
 units[30] = ['101'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1781. ";
 preguntaids[30] = 1781


//  Id pregunta: 7808 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes paquetes software se usa para construir grids?";
 choices[31]= new Array();
 choices[31][0] = "Globus Toolkit.";
 choices[31][1] = "Grid Squema Toolkit.";
 choices[31][2] = "EYEE Toolkit.";
 choices[31][3] = "WS-DAI.";
 answers[31] = 0;
 units[31] = ['49'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 7808. ";
 preguntaids[31] = 7808


//  Id pregunta: 976 Año de creación de pregunta: 2016
 questions[32]= "33)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[32]= new Array();
 choices[32][0] = "circulares";
 choices[32][1] = "reglamentos internos";
 choices[32][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[32][3] = "disposiciones de car&aacute;cter general";
 answers[32] = 2;
 units[32] = ['4', '7', '8', '9'];
 blocks[32] = ['A1', 'A2'];
 comments[32] = "Id Pregunta: 976. Ley 40/2015";
 preguntaids[32] = 976


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[33]= "34)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "Siempre en formato electr&oacute;nico.";
 choices[33][1] = "Siempre en formato papel.";
 choices[33][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[33][3] = "La ley no regula el formato del expediente.";
 answers[33] = 0;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 205. Ley 39/2015";
 preguntaids[33] = 205


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[34]= "35)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[34]= new Array();
 choices[34][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[34][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[34][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[34][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[34] = 0;
 units[34] = ['8'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 256. Ley 39/2015";
 preguntaids[34] = 256


//  Id pregunta: 1991 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los sistemas de almacenamiento basados en iSCSI es FALSA?";
 choices[35]= new Array();
 choices[35][0] = "Funcionan &uacute;nicamente sobre redes Gigabit Ethernet.";
 choices[35][1] = "Son m&aacute;s econ&oacute;micos que las soluciones basadas en Fibre Channel.";
 choices[35][2] = "Actualmente tienen un rendimiento inferior a las soluciones basadas en Fibre Channel.";
 choices[35][3] = "Consisten en el intercambio de tramas SCSI pero sobre TCP/IP, en lugar de sobre FC.";
 answers[35] = 0;
 units[35] = ['53'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 1991. ";
 preguntaids[35] = 1991


//  Id pregunta: 1422 Año de creación de pregunta: 2016
 questions[36]= "37)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:";
 choices[36]= new Array();
 choices[36][0] = "De calamidad p&uacute;blica.";
 choices[36][1] = "De grave riesgo.";
 choices[36][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[36][3] = "En cualquiera de las situaciones anteriores.";
 answers[36] = 2;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 1422. ";
 preguntaids[36] = 1422


//  Id pregunta: 8360 Año de creación de pregunta: 2011
 questions[37]= "38)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[37]= new Array();
 choices[37][0] = "Sistema Vectorial.";
 choices[37][1] = "Sistema R&aacute;ster.";
 choices[37][2] = "Sistema georreferencial orientado a objetos.";
 choices[37][3] = "Sistema georreferencial basado en metadatos.";
 answers[37] = 1;
 units[37] = ['71'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8360. Analista Ayto. Madrid 2010";
 preguntaids[37] = 8360


//  Id pregunta: 8740 Año de creación de pregunta: 2013
 questions[38]= "39)  El dominio de control &quot;Seguridad ligada al personal&quot; se corresponde con la dimensi&oacute;n de seguridad:";
 choices[38]= new Array();
 choices[38][0] = "Organizativa.";
 choices[38][1] = "L&oacute;gica";
 choices[38][2] = "F&iacute;sica";
 choices[38][3] = "Legal";
 answers[38] = 0;
 units[38] = ['45'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 8740. ";
 preguntaids[38] = 8740


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[39]= "40)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[39]= new Array();
 choices[39][0] = "3 a&ntilde;os.";
 choices[39][1] = "5 a&ntilde;os.";
 choices[39][2] = "4 a&ntilde;os.";
 choices[39][3] = "6 a&ntilde;os.";
 answers[39] = 1;
 units[39] = ['1'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 20. Constituci&oacute;n de 1978";
 preguntaids[39] = 20


//  Id pregunta: 8084 Año de creación de pregunta: 2011
 questions[40]= "41)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[40]= new Array();
 choices[40][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[40][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[40][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[40][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[40] = 0;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8084. Analista Ayto. Madrid 2010";
 preguntaids[40] = 8084


//  Id pregunta: 4411 Año de creación de pregunta: 2002
 questions[41]= "42)  En las Active Server Pages de Microsoft IIS:";
 choices[41]= new Array();
 choices[41][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[41][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[41][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[41][3] = "A y B son ciertas";
 answers[41] = 3;
 units[41] = ['63'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 4411. ";
 preguntaids[41] = 4411


//  Id pregunta: 6407 Año de creación de pregunta: 2003
 questions[42]= "43)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[42]= new Array();
 choices[42][0] = "C&oacute;mprime s&oacute;lo archivos .class";
 choices[42][1] = "Son un tipo de archivo JAR";
 choices[42][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[42][3] = "Es un empaquetado de archivos XML";
 answers[42] = 1;
 units[42] = ['64'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 6407. ";
 preguntaids[42] = 6407


//  Id pregunta: 2478 Año de creación de pregunta: 2004
 questions[43]= "44)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[43]= new Array();
 choices[43][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[43][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[43][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[43][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[43] = 3;
 units[43] = ['53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2478. ";
 preguntaids[43] = 2478


//  Id pregunta: 6426 Año de creación de pregunta: 2003
 questions[44]= "45)  Indique cu&aacute;l de los siguientes es un framework de c&oacute;digo abierto que se ocupa de la capa de persistencia entre la l&oacute;gica de negocio y la base de datos:";
 choices[44]= new Array();
 choices[44][0] = "iBATIS";
 choices[44][1] = "JAVA SERVER FACES";
 choices[44][2] = "TAPESTRY";
 choices[44][3] = "STRUTS";
 answers[44] = 0;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6426. ";
 preguntaids[44] = 6426


//  Id pregunta: 2221 Año de creación de pregunta: 2002
 questions[45]= "46)  La duraci&oacute;n de la protecci&oacute;n otorgada por el Texto Refundido de la Ley de Propiedad Intelectual, aprobada por Real Decreto Legislativo 1/1996, a los programas de ordenador es de:";
 choices[45]= new Array();
 choices[45][0] = "50 a&ntilde;os";
 choices[45][1] = "30 a&ntilde;os";
 choices[45][2] = "70 a&ntilde;os desde el fallecimiento del creador, si es una persona f&iacute;sica";
 choices[45][3] = "60 a&ntilde;os en todo caso";
 answers[45] = 2;
 units[45] = ['41'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2221. ";
 preguntaids[45] = 2221


//  Id pregunta: 3682 Año de creación de pregunta: 2002
 questions[46]= "47)  Indicar cu&aacute;les de las siguientes son propiedades fundamentales en la orientaci&oacute;n a objetos:";
 choices[46]= new Array();
 choices[46][0] = "Herencia, encapsulaci&oacute;n, polimorfismo, persistencia";
 choices[46][1] = "Abstracci&oacute;n, reusabilidad";
 choices[46][2] = "Extensibilidad";
 choices[46][3] = "Todas son propiedades fundamentales en la orientaci&oacute;n a objetos";
 answers[46] = 3;
 units[46] = ['85'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3682. ";
 preguntaids[46] = 3682


//  Id pregunta: 1420 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; T&iacute;tulo regula la Econom&iacute;a y la Hacienda en la Constituci&oacute;n Espa&ntilde;ola vigente en la actualidad?:";
 choices[47]= new Array();
 choices[47][0] = "El T&iacute;tulo IV.";
 choices[47][1] = "El T&iacute;tulo V.";
 choices[47][2] = "El T&iacute;tulo VI.";
 choices[47][3] = "El T&iacute;tulo VII.";
 answers[47] = 3;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 1420. ";
 preguntaids[47] = 1420


//  Id pregunta: 10197 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[48]= new Array();
 choices[48][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[48][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[48][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[48][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[48] = 3;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 10197. Examen TIC A1 2014";
 preguntaids[48] = 10197


//  Id pregunta: 2090 Año de creación de pregunta: 2002
 questions[49]= "50)  El Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos:";
 choices[49]= new Array();
 choices[49][0] = "Es un &oacute;rgano colegiado de asesoramiento del Director de la Agencia";
 choices[49][1] = "Emite informes en todas las cuestiones que le somete el Director";
 choices[49][2] = "Formula propuestas en temas relacionados con las competencias de la Agencia";
 choices[49][3] = "Todas son correctas";
 answers[49] = 3;
 units[49] = ['35'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2090. ";
 preguntaids[49] = 2090


//  Id pregunta: 10610 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones?";
 choices[50]= new Array();
 choices[50][0] = "Derecho de acceder a los servicios de emergencia de forma gratuita.";
 choices[50][1] = "A impedir mediante un procedimiento sencillo y gratuito la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea a las llamadas emitidas.";
 choices[50][2] = "El derecho a la continuidad de servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[50][3] = "A figurar en las gu&iacute;as de abonados obteniendo una retribuci&oacute;n econ&oacute;mica por ello a cargo del Fondo General del Servicio P&uacute;blico.";
 answers[50] = 3;
 units[50] = ['121'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10610. Articulo 47";
 preguntaids[50] = 10610


//  Id pregunta: 2093 Año de creación de pregunta: 2009
 questions[51]= "52)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[51]= new Array();
 choices[51][0] = "Es nombrado por las Cortes Generales";
 choices[51][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[51][2] = "Ostenta el rango de Subsecretario";
 choices[51][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[51] = 2;
 units[51] = ['35'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2093. ";
 preguntaids[51] = 2093


//  Id pregunta: 5209 Año de creación de pregunta: 2006
 questions[52]= "53)  Respecto a los protocolos de routing:";
 choices[52]= new Array();
 choices[52][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[52][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[52][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[52][3] = "Todas son falsas";
 answers[52] = 0;
 units[52] = ['102'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5209. ";
 preguntaids[52] = 5209


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[53]= new Array();
 choices[53][0] = "La CETIC";
 choices[53][1] = "Los Ministerios";
 choices[53][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = 1;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 471. Estrategia TIC";
 preguntaids[53] = 471


//  Id pregunta: 6709 Año de creación de pregunta: 2009
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes apartados NO es una t&eacute;cnica utilizada en reconocimiento de voz?";
 choices[54]= new Array();
 choices[54][0] = "Modelos de Markov";
 choices[54][1] = "Redes Neuronales";
 choices[54][2] = "DTW (Dynamic Time Warping)";
 choices[54][3] = "OSR (Online Speech Recognition)";
 answers[54] = 3;
 units[54] = ['81'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6709. MAP 2008 A1";
 preguntaids[54] = 6709


//  Id pregunta: 1272 Año de creación de pregunta: 2016
 questions[55]= "56)  Las Pruebas de caja blanca NO dan cobertura de:";
 choices[55]= new Array();
 choices[55][0] = "Segmentos y ramas.";
 choices[55][1] = "Condici&oacute;n / decisi&oacute;n.";
 choices[55][2] = "Bucles.";
 choices[55][3] = "Texto.";
 answers[55] = 3;
 units[55] = ['92'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 1272. ";
 preguntaids[55] = 1272


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[56]= new Array();
 choices[56][0] = "Indirecta.";
 choices[56][1] = "Directa.";
 choices[56][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[56][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[56] = 1;
 units[56] = ['14'];
 blocks[56] = ['A3'];
 comments[56] = "Id Pregunta: 1291. ";
 preguntaids[56] = 1291


//  Id pregunta: 7512 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[57]= new Array();
 choices[57][0] = "X/OPEN.";
 choices[57][1] = "ACE.";
 choices[57][2] = "OSF.";
 choices[57][3] = "IEEE.";
 answers[57] = 3;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 7512. Map 2005";
 preguntaids[57] = 7512


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Reglamentos no se caracterizan por:";
 choices[58]= new Array();
 choices[58][0] = "No poseer alcance general.";
 choices[58][1] = "Ser obligatorios.";
 choices[58][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[58][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[58] = 0;
 units[58] = ['5'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 185. Uni&oacute;n Europea";
 preguntaids[58] = 185


//  Id pregunta: 3811 Año de creación de pregunta: 2002
 questions[59]= "60)  En el modelo entidad/relaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "una relaci&oacute;n o interrelaci&oacute;n expresa una correspondencia o asociaci&oacute;n entre 2 &oacute; m&aacute;s entidades";
 choices[59][1] = "una relaci&oacute;n no puede tener atributos, ya que esto s&oacute;lo corresponde a las entidades";
 choices[59][2] = "la cardinalidad se refiere al m&iacute;nimo y m&aacute;ximo n&uacute;mero de entidades que puede haber en el sistema";
 choices[59][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[59] = 0;
 units[59] = ['85'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3811. ";
 preguntaids[59] = 3811


//  Id pregunta: 1193 Año de creación de pregunta: 2016
 questions[60]= "61)  El comando ping es el acr&oacute;nimo de:";
 choices[60]= new Array();
 choices[60][0] = "Packet Internet Group.";
 choices[60][1] = "Packet Internet Gangway.";
 choices[60][2] = "Packet Internet Gate.";
 choices[60][3] = "Packet Internet Groper.";
 answers[60] = 3;
 units[60] = ['109'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1193. ";
 preguntaids[60] = 1193


//  Id pregunta: 10399 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[61]= new Array();
 choices[61][0] = "Confianza Digital";
 choices[61][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[61][2] = "Impulsar i+d TIC";
 choices[61][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[61] = 3;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 10399. ";
 preguntaids[61] = 10399


//  Id pregunta: 4271 Año de creación de pregunta: 2006
 questions[62]= "63)  En el analisis documental &iquest;qu&eacute; nivel no se emplea ?";
 choices[62]= new Array();
 choices[62][0] = "asiento";
 choices[62][1] = "indizaci&oacute;n";
 choices[62][2] = "resumen";
 choices[62][3] = "todos ellos se emplean";
 answers[62] = 3;
 units[62] = ['99'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 4271. ";
 preguntaids[62] = 4271


//  Id pregunta: 4409 Año de creación de pregunta: 2002
 questions[63]= "64)  El l&aacute;ser, como fuente de luz, es:";
 choices[63]= new Array();
 choices[63][0] = "Un oscilador &oacute;ptico basado en la formaci&oacute;n de una onda electromagn&eacute;tica confinada dentro de una cavidad";
 choices[63][1] = "Un rayo luminoso compuesto de ondas de diversas frecuencias";
 choices[63][2] = "Un dispositivo &oacute;ptico con ganancia interna y voltaje de ruptura";
 choices[63][3] = "Un dispositivo utilizado para seleccionar los componentes de una se&ntilde;al de acuerdo con sus frecuencias";
 answers[63] = 0;
 units[63] = ['106'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4409. ";
 preguntaids[63] = 4409


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[64]= "65)  El programa IDABC:";
 choices[64]= new Array();
 choices[64][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[64][1] = "Contiene tres directivas";
 choices[64][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[64][3] = "Fue creado antes que el ENS";
 answers[64] = 0;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 4021. ";
 preguntaids[64] = 4021


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[65]= new Array();
 choices[65][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[65][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[65][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[65][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[65] = 1;
 units[65] = ['1'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 32. Constituci&oacute;n de 1978";
 preguntaids[65] = 32


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[66]= "67)  En la realizaci&oacute;n de DFDs:";
 choices[66]= new Array();
 choices[66][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[66][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[66][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = 3;
 units[66] = ['85', '86'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3821. ";
 preguntaids[66] = 3821


//  Id pregunta: 6696 Año de creación de pregunta: 2009
 questions[67]= "68)  WSDL son las siglas de:";
 choices[67]= new Array();
 choices[67][0] = "Web Services Description Language";
 choices[67][1] = "Web Services Data Language";
 choices[67][2] = "Web SOAP Definition Language";
 choices[67][3] = "Web Services Distributed Language";
 answers[67] = 0;
 units[67] = ['55'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6696. ";
 preguntaids[67] = 6696


//  Id pregunta: 3527 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes es un principio de especificaci&oacute;n del software de acuerdo con R.S. Pressman?:";
 choices[68]= new Array();
 choices[68][0] = "Separar funcionalidad de implementaci&oacute;n";
 choices[68][1] = "La especificaci&oacute;n del sistema debe ser tolerante a la incompletitud y ampliable";
 choices[68][2] = "Una especificaci&oacute;n debe ser operativa";
 choices[68][3] = "Todos los anteriores son principios de especificaci&oacute;n del software";
 answers[68] = 3;
 units[68] = ['84'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3527. ";
 preguntaids[68] = 3527


//  Id pregunta: 8823 Año de creación de pregunta: 2013
 questions[69]= "70)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;todos de concordancia";
 choices[69][1] = "M&eacute;todos basados en permutaciones";
 choices[69][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[69][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[69] = 0;
 units[69] = ['38'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8823. ";
 preguntaids[69] = 8823


//  Id pregunta: 3292 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[70]= new Array();
 choices[70][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[70][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[70][2] = "Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[70][3] = "Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[70] = 1;
 units[70] = ['86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3292. ";
 preguntaids[70] = 3292


//  Id pregunta: 4916 Año de creación de pregunta: 2002
 questions[71]= "72)  La RFC que contiene las especificaciones del protocolo IPv6 es:";
 choices[71]= new Array();
 choices[71][0] = "1945";
 choices[71][1] = "1884";
 choices[71][2] = "2460";
 choices[71][3] = "2584";
 answers[71] = 2;
 units[71] = ['105'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4916. ";
 preguntaids[71] = 4916


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[72]= "73)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[72][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[72][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[72][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[72] = 0;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[72] = 97


//  Id pregunta: 8982 Año de creación de pregunta: 2013
 questions[73]= "74)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[73]= new Array();
 choices[73][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[73][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[73][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[73][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[73] = 0;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 8982. Ley 59/2003, art&iacute;culo 33";
 preguntaids[73] = 8982


//  Id pregunta: 7679 Año de creación de pregunta: 2010
 questions[74]= "75)  En el proceso RUP (&laquo;Rational Unified Process&raquo;):";
 choices[74]= new Array();
 choices[74][0] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de actividades, productos intermedios, perfiles de trabajo o roles y flujos de trabajo.";
 choices[74][1] = "La dimensi&oacute;n est&aacute;tica del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[74][2] = "La dimensi&oacute;n temporal del proceso se expresa en t&eacute;rminos de ciclos, fases, iteraciones e hitos.";
 choices[74][3] = "En la dimensi&oacute;n est&aacute;tica, cada ciclo se compone de cuatro fases secuenciales (comienzo, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n).";
 answers[74] = 2;
 units[74] = ['84'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7679. Map 2007";
 preguntaids[74] = 7679


