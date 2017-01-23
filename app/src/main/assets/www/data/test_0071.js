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
//  Id pregunta: 8036 Año de creación de pregunta: 2011
 questions[0]= "1)  Elija la opci&oacute;n que corresponde a una relaci&oacute;n entre casos de usos en UMl:";
 choices[0]= new Array();
 choices[0][0] = "Extiende.";
 choices[0][1] = "Referencia.";
 choices[0][2] = "Hereda.";
 choices[0][3] = "Vincula.";
 answers[0] = 0;
 units[0] = ['89'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 8036. Examen TIC A2 2010";
 preguntaids[0] = 8036


//  Id pregunta: 983 Año de creación de pregunta: 2016
 questions[1]= "2)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "la organizaci&oacute;n central, que integra los Ministerios y los servicios comunes";
 choices[1][1] = "la Organizaci&oacute;n Territorial";
 choices[1][2] = "la Organizaci&oacute;n sectorial";
 choices[1][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[1] = 2;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 983. Ley 40/2015";
 preguntaids[1] = 983


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[2]= "3)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[2]= new Array();
 choices[2][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[2][1] = "Cuando haya recibido al menos dos ACK.";
 choices[2][2] = "Cuando reciba cualquier ACK.";
 choices[2][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[2] = 2;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[2] = 10005


//  Id pregunta: 6404 Año de creación de pregunta: 2003
 questions[3]= "4)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa";
 choices[3]= new Array();
 choices[3][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[3][1] = "Se compone de uno o mas DataTable";
 choices[3][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[3][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos.";
 answers[3] = 0;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6404. ";
 preguntaids[3] = 6404


//  Id pregunta: 8572 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[4]= new Array();
 choices[4][0] = "En 1950";
 choices[4][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[4][2] = "En 1980";
 choices[4][3] = "En la d&eacute;cada de los noventa.";
 answers[4] = 1;
 units[4] = ['49'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8572. ";
 preguntaids[4] = 8572


//  Id pregunta: 7495 Año de creación de pregunta: 2010
 questions[5]= "6)  La direcci&oacute;n de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP  100.254.254.254, es:";
 choices[5]= new Array();
 choices[5][0] = "100.255.255.255.";
 choices[5][1] = "0.0.0.255.";
 choices[5][2] = "100.0.0.0.";
 choices[5][3] = "100.254.254.255.";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7495. Map 2005";
 preguntaids[5] = 7495


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


//  Id pregunta: 2736 Año de creación de pregunta: 2002
 questions[7]= "8)  DIMM y SIMM son:";
 choices[7]= new Array();
 choices[7][0] = "2 formas de paralelismo en ordenadores (Distributed y Single)";
 choices[7][1] = "2 formas de gesti&oacute;n de memoria (Memory Management)";
 choices[7][2] = "2 tipos de encapsulado de memoria (Dual y Single)";
 choices[7][3] = "2 organismos de estandarizaci&oacute;n para Internet (Internet &amp; MultiMedia)";
 answers[7] = 2;
 units[7] = ['51'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 2736. ";
 preguntaids[7] = 2736


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[8]= "9)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[8]= new Array();
 choices[8][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[8][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[8][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[8][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[8] = 3;
 units[8] = ['7', '77'];
 blocks[8] = ['A2', 'B2'];
 comments[8] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[8] = 9791


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[9]= "10)  La sede del Parlamento Europeo se encuentra en:";
 choices[9]= new Array();
 choices[9][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[9][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[9][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[9][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[9] = 1;
 units[9] = ['5'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 171. Uni&oacute;n Europea";
 preguntaids[9] = 171


//  Id pregunta: 8983 Año de creación de pregunta: 2013
 questions[10]= "11)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[10]= new Array();
 choices[10][0] = "Leve, grave o muy grave";
 choices[10][1] = "Grave o muy grave";
 choices[10][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[10][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[10] = 1;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 8983. Ley 59/2003, art&iacute;culo 34";
 preguntaids[10] = 8983


//  Id pregunta: 9280 Año de creación de pregunta: 2014
 questions[11]= "12)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[11]= new Array();
 choices[11][0] = "Cat&aacute;logo de clases.";
 choices[11][1] = "Cat&aacute;logo de entidades";
 choices[11][2] = "Cat&aacute;logo de miembros.";
 choices[11][3] = "Cat&aacute;logo de interfaces.";
 answers[11] = 0;
 units[11] = ['91'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 9280. Examen TIC A2 2013. Promocion interna";
 preguntaids[11] = 9280


//  Id pregunta: 1387 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[12]= new Array();
 choices[12][0] = "Ping";
 choices[12][1] = "ICMP";
 choices[12][2] = "PPP";
 choices[12][3] = "RSVP";
 answers[12] = 1;
 units[12] = ['102'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1387. ";
 preguntaids[12] = 1387


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[13][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[13][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[13][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[13] = 1;
 units[13] = ['22'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[13] = 518


//  Id pregunta: 2696 Año de creación de pregunta: 2002
 questions[14]= "15)  CICS";
 choices[14]= new Array();
 choices[14][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[14][1] = "Es un servidor de directorio x500";
 choices[14][2] = "Es un monitor transaccional";
 choices[14][3] = "Es un servidor de directorio LDAP";
 answers[14] = 2;
 units[14] = ['51'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2696. ";
 preguntaids[14] = 2696


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[15]= new Array();
 choices[15][0] = "Al Gobierno de la naci&oacute;n";
 choices[15][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[15][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[15][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[15] = 3;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 241. Ley 39/2015";
 preguntaids[15] = 241


//  Id pregunta: 8662 Año de creación de pregunta: 2013
 questions[16]= "17)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[16]= new Array();
 choices[16][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[16][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[16][2] = "Login";
 choices[16][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[16] = 0;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8662. ";
 preguntaids[16] = 8662


//  Id pregunta: 8231 Año de creación de pregunta: 2011
 questions[17]= "18)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[17]= new Array();
 choices[17][0] = "802.6";
 choices[17][1] = "802.7";
 choices[17][2] = "802.8";
 choices[17][3] = "802.9";
 answers[17] = 2;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8231. Examen UPM A2 2011";
 preguntaids[17] = 8231


//  Id pregunta: 9350 Año de creación de pregunta: 2014
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[18]= new Array();
 choices[18][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[18][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[18][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[18][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[18] = 0;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9350. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[18] = 9350


//  Id pregunta: 8822 Año de creación de pregunta: 2013
 questions[19]= "20)  En la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[19]= new Array();
 choices[19][0] = "DELPHI";
 choices[19][1] = "Entrop&iacute;a";
 choices[19][2] = "SAATY";
 choices[19][3] = "PROMETHEE";
 answers[19] = 3;
 units[19] = ['38'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 8822. ";
 preguntaids[19] = 8822


//  Id pregunta: 10098 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[20]= new Array();
 choices[20][0] = "Modo ECB (Electronic CodeBook).";
 choices[20][1] = "Modo CBC (Cipher Block Chaining).";
 choices[20][2] = "Modo OFB (Output FeedBack).";
 choices[20][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[20] = 3;
 units[20] = ['77', '78'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 10098. Examen TIC A2 2014";
 preguntaids[20] = 10098


//  Id pregunta: 9987 Año de creación de pregunta: 2015
 questions[21]= "22)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[21]= new Array();
 choices[21][0] = "Garantiza la confidencialidad de un documento.";
 choices[21][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[21][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[21][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[21] = 3;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 9987. Examen TIC A2 2014";
 preguntaids[21] = 9987


//  Id pregunta: 2615 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no representan una caracter&iacute;stica de Unix?:";
 choices[22]= new Array();
 choices[22][0] = "Multiusuario y multitarea";
 choices[22][1] = "Sistema jer&aacute;rquico de ficheros";
 choices[22][2] = "Comando de int&eacute;rpretes flexible";
 choices[22][3] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 answers[22] = 3;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2615. ";
 preguntaids[22] = 2615


//  Id pregunta: 10971 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la ley 19/2013 de transparencia y en lo referente al buen gobierno considera:";
 choices[23]= new Array();
 choices[23][0] = "Infracci&oacute;n disciplinaria muy grave, el acoso laboral.";
 choices[23][1] = "Infracci&oacute;n muy grave en materia de gesti&oacute;n econ&oacute;mico-presupuestaria, el incumplimiento de la obligaci&oacute;n de rendir cuentas regulada en el art&iacute;culo 137 de la Ley 47/2003, General Presupuestaria.";
 choices[23][2] = "Infracci&oacute;n grave, la intervenci&oacute;n en un procedimiento administrativo cuando se d&eacute; alguna de las causas de abstenci&oacute;n legalmente se&ntilde;aladas.";
 choices[23][3] = "Todas son verdaderas.";
 answers[23] = 3;
 units[23] = ['22'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 10971. ";
 preguntaids[23] = 10971


//  Id pregunta: 9353 Año de creación de pregunta: 2014
 questions[24]= "25)  Elija la respuesta correcta:";
 choices[24]= new Array();
 choices[24][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[24][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[24][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[24][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[24] = 0;
 units[24] = ['63'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9353. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[24] = 9353


//  Id pregunta: 6298 Año de creación de pregunta: 2003
 questions[25]= "26)  En relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[25]= new Array();
 choices[25][0] = "Tambi&eacute;n llamado &quot;con reutilizaci&oacute;n&quot;, se ensambla el desarrollo con componentes software ya existentes";
 choices[25][1] = "Es adecuado a tecnolog&iacute;as orientadas a objetos";
 choices[25][2] = "El inconveniente es la excesiva dependencia de la calidad, robustez y flexibilidad de las librer&iacute;as de componentes.";
 choices[25][3] = "Todas las anteriores son correctas";
 answers[25] = 3;
 units[25] = ['82'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 6298. ";
 preguntaids[25] = 6298


//  Id pregunta: 4753 Año de creación de pregunta: 2002
 questions[26]= "27)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[26]= new Array();
 choices[26][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[26][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[26][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[26][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[26] = 0;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4753. ";
 preguntaids[26] = 4753


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[27]= "28)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[27]= new Array();
 choices[27][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[27][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[27][2] = "Los interesados en el procedimiento";
 choices[27][3] = "Las alternativas b) y c) son correctas";
 answers[27] = 1;
 units[27] = ['4', '7', '8', '9'];
 blocks[27] = ['A1', 'A2'];
 comments[27] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[27] = 1022


//  Id pregunta: 5107 Año de creación de pregunta: 2004
 questions[28]= "29)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[28]= new Array();
 choices[28][0] = "Utiliza el protocolo TCP";
 choices[28][1] = "Utiliza servicios de DNS";
 choices[28][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[28][3] = "A y C son ciertas";
 answers[28] = 3;
 units[28] = ['116'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5107. ";
 preguntaids[28] = 5107


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[29]= new Array();
 choices[29][0] = "Tiene car&aacute;cter facultativo.";
 choices[29][1] = "Tiene car&aacute;cter potestativo.";
 choices[29][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[29][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[29] = 1;
 units[29] = ['22'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[29] = 500


//  Id pregunta: 7904 Año de creación de pregunta: 2011
 questions[30]= "31)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[30][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[30][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[30][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[30] = 0;
 units[30] = ['84'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7904. Examen TIC A1 2010";
 preguntaids[30] = 7904


//  Id pregunta: 5805 Año de creación de pregunta: 2007
 questions[31]= "32)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[31]= new Array();
 choices[31][0] = "4G";
 choices[31][1] = "3.5G";
 choices[31][2] = "5G";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 1;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5805. ";
 preguntaids[31] = 5805


//  Id pregunta: 3217 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[32]= new Array();
 choices[32][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[32][1] = "Alta volatilidad de los datos.";
 choices[32][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[32][3] = "Integraci&oacute;n del formato de los datos.";
 answers[32] = 1;
 units[32] = ['72'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3217. Junta Andaluc&iacute;a";
 preguntaids[32] = 3217


//  Id pregunta: 4942 Año de creación de pregunta: 2002
 questions[33]= "34)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[33]= new Array();
 choices[33][0] = "ET1";
 choices[33][1] = "ET2";
 choices[33][2] = "TR2";
 choices[33][3] = "AT";
 answers[33] = 2;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4942. ";
 preguntaids[33] = 4942


//  Id pregunta: 6208 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;Cu&aacute;l es el objetivo de la Gesti&oacute;n de Configuraci&oacute;n del Software?";
 choices[34]= new Array();
 choices[34][0] = "Gestionar de forma autom&aacute;tica la creaci&oacute;n, modificaci&oacute;n y borrado de usuarios en un sistema de informaci&oacute;n.";
 choices[34][1] = "Mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realizan cambios incontrolados.";
 choices[34][2] = "Permitir que los programadores de un sistema de informaci&oacute;n conozcan en todo momento los cambios de la configuraci&oacute;n f&iacute;sica que se vaya produciendo a nivel de sistema operativo.";
 choices[34][3] = "Permitir gestionar los recursos que se deidcan a cada tarea de desarrollo de los distintos m&oacute;dulos del sistema.";
 answers[34] = 1;
 units[34] = ['84'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6208. Examen TIC A Castilla La Mancha 2007";
 preguntaids[34] = 6208


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[35]= "36)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[35]= new Array();
 choices[35][0] = "Interoperabilidad";
 choices[35][1] = "Integridad";
 choices[35][2] = "Capital humano";
 choices[35][3] = "Trazabilidad";
 answers[35] = 2;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 486. Sociedad de la informaci&oacute;n";
 preguntaids[35] = 486


//  Id pregunta: 1234 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[36]= new Array();
 choices[36][0] = "16, 24, 32 &oacute; 40";
 choices[36][1] = "6, 12, 24 &oacute; 48";
 choices[36][2] = "4, 8, 16 &oacute; 40";
 choices[36][3] = "8, 16, 32 &oacute; 64";
 answers[36] = 0;
 units[36] = ['110'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 1234. ";
 preguntaids[36] = 1234


//  Id pregunta: 4707 Año de creación de pregunta: 2002
 questions[37]= "38)  Entre los modos de conexi&oacute;n de la Red Digital de Servicios Integrados se define el Acceso B&aacute;sico. Indique cu&aacute;l de las siguientes opciones lo define, o si son falsas todas las definiciones:";
 choices[37]= new Array();
 choices[37][0] = "Un Acceso B&aacute;sico se define como el constituido por dos canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[37][1] = "Un Acceso B&aacute;sico se define como el constituido por treinta canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[37][2] = "Un Acceso B&aacute;sico se define como el constituido por doce canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = 0;
 units[37] = ['114'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4707. ";
 preguntaids[37] = 4707


//  Id pregunta: 10068 Año de creación de pregunta: 2015
 questions[38]= "39)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[38]= new Array();
 choices[38][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[38][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[38][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[38][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[38] = 1;
 units[38] = ['56'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10068. Examen TIC A2 2014";
 preguntaids[38] = 10068


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[39]= new Array();
 choices[39][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[39][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[39][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[39][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[39] = 3;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 281. Presupuestos generales";
 preguntaids[39] = 281


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[40]= "41)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[40]= new Array();
 choices[40][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[40][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[40][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[40][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[40] = 0;
 units[40] = ['12'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 342. Modelo econ&oacute;mico";
 preguntaids[40] = 342


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[41]= "42)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[41]= new Array();
 choices[41][0] = "Veinticinco.";
 choices[41][1] = "Veintiuno.";
 choices[41][2] = "Dieciocho.";
 choices[41][3] = "Diecinueve.";
 answers[41] = 0;
 units[41] = ['5'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 145. Uni&oacute;n Europea";
 preguntaids[41] = 145


//  Id pregunta: 7924 Año de creación de pregunta: 2011
 questions[42]= "43)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[42]= new Array();
 choices[42][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[42][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[42][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[42][3] = "Quejas y reclamaciones.";
 answers[42] = 3;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 7924. Examen TIC A1 2010";
 preguntaids[42] = 7924


//  Id pregunta: 5027 Año de creación de pregunta: 2002
 questions[43]= "44)  PLC responde por:";
 choices[43]= new Array();
 choices[43][0] = "Power Limit Consumption";
 choices[43][1] = "Priority Lock Change";
 choices[43][2] = "Power Line Communication";
 choices[43][3] = "Protocol Link Conmutation";
 answers[43] = 2;
 units[43] = ['108'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 5027. ";
 preguntaids[43] = 5027


//  Id pregunta: 8684 Año de creación de pregunta: 2013
 questions[44]= "45)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[44]= new Array();
 choices[44][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[44][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[44][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[44][3] = "Todas son correctas.";
 answers[44] = 3;
 units[44] = ['57'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 8684. ";
 preguntaids[44] = 8684


//  Id pregunta: 2443 Año de creación de pregunta: 2006
 questions[45]= "46)  Una norma europea es:";
 choices[45]= new Array();
 choices[45][0] = "Una norma aprobada por un organismo de normalizaci&oacute;n con el que la Uni&oacute;n Europea ha establecido acuerdos";
 choices[45][1] = "De obligado cumplimiento en la Uni&oacute;n Europea";
 choices[45][2] = "Una norma homologada por un organismo de normalizaci&oacute;n con sede en la Uni&oacute;n Europea";
 choices[45][3] = "Una norma elaborada por el Comit&eacute; Europeo de Normalizaci&oacute;n (CEN)";
 answers[45] = 0;
 units[45] = ['48'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2443. ";
 preguntaids[45] = 2443


//  Id pregunta: 1902 Año de creación de pregunta: 2016
 questions[46]= "47)  Para limitar el impacto negativo del tr&aacute;fico de broadcast, &iquest;Cu&aacute;l de las siguientes medidas NO es v&aacute;lida?:";
 choices[46]= new Array();
 choices[46][0] = "Dividir la red en subredes";
 choices[46][1] = "Implementar dispositivos de capa 3 para la comunicaci&oacute;n entre subredes";
 choices[46][2] = "Dividir la red en VLANs";
 choices[46][3] = "Sustituir Concentrador (hub) por conmutadores (switch)";
 answers[46] = 3;
 units[46] = ['102'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 1902. ";
 preguntaids[46] = 1902


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[47]= "48)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[47]= new Array();
 choices[47][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[47][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[47][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[47][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[47] = 3;
 units[47] = ['63'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[47] = 10052


//  Id pregunta: 1084 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique la frase correcta acerca de los sistemas CRM,&rdquo;Customer relationship management&rdquo; y ERP &ldquo;Enterprise resource planning&rdquo;.";
 choices[48]= new Array();
 choices[48][0] = "La contabilidad financiera es un m&oacute;dulo caracter&iacute;stico de los sistemas CRM anal&iacute;ticos.";
 choices[48][1] = "El uso de t&eacute;cnicas de data mining en los CRM operacionales permite analizar tendencias en el comportamiento de los clientes.";
 choices[48][2] = "Los sistemas ERP son sistemas transaccionales que se implementan &uacute;nicamente sobre arquitecturas cliente servidor.";
 choices[48][3] = "Las parametrizaciones incorporadas en los ERP los hacen m&aacute;s flexibles pero impiden su actualizaci&oacute;n.";
 answers[48] = 1;
 units[48] = ['69'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1084. ";
 preguntaids[48] = 1084


//  Id pregunta: 6527 Año de creación de pregunta: 2003
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[49]= new Array();
 choices[49][0] = "El bus ISA es posterior al bus PCI";
 choices[49][1] = "El bus EISA es anterior al bus ISA";
 choices[49][2] = "El bus PCI es anterior al bus AGP";
 choices[49][3] = "El bus USB es posterior al bus AGP";
 answers[49] = 2;
 units[49] = ['52'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6527. ";
 preguntaids[49] = 6527


//  Id pregunta: 5734 Año de creación de pregunta: 2007
 questions[50]= "51)  &iquest;Qui&eacute;n NO es un participante en la actividad Elaboraci&oacute;n del Modelo de Datos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[50]= new Array();
 choices[50][0] = "usuarios expertos";
 choices[50][1] = "analistas";
 choices[50][2] = "jefe de proyecto";
 choices[50][3] = "equipo de soporte t&eacute;cnico";
 answers[50] = 2;
 units[50] = ['91'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 5734. ";
 preguntaids[50] = 5734


//  Id pregunta: 3516 Año de creación de pregunta: 2006
 questions[51]= "52)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[51]= new Array();
 choices[51][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[51][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[51][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[51][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[51] = 2;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 3516. Ley 59/2003, art&iacute;culo 7";
 preguntaids[51] = 3516


//  Id pregunta: 4612 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[52]= new Array();
 choices[52][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[52][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[52][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[52][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[52] = 2;
 units[52] = ['116'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4612. ";
 preguntaids[52] = 4612


//  Id pregunta: 7863 Año de creación de pregunta: 2011
 questions[53]= "54)  Los &quot;mashups&quot; en Web 2.0:";
 choices[53]= new Array();
 choices[53][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[53][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[53][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[53][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[53] = 2;
 units[53] = ['125'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 7863. Examen TIC A1 2010";
 preguntaids[53] = 7863


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[54]= new Array();
 choices[54][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[54][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[54][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[54][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[54] = 0;
 units[54] = ['15'];
 blocks[54] = ['A3'];
 comments[54] = "Id Pregunta: 422. Mercado laboral";
 preguntaids[54] = 422


//  Id pregunta: 6371 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[55][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[55][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[55][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[55] = 2;
 units[55] = ['77'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6371. Examen 2006 JCYL";
 preguntaids[55] = 6371


//  Id pregunta: 5152 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes sistemas de cableado es conocido como &quot;cheapernet&quot;?";
 choices[56]= new Array();
 choices[56][0] = "El cable coaxial utilizado en el est&aacute;ndar 10Base5";
 choices[56][1] = "El cable coaxial utilizado en el est&aacute;ndar 10Base2";
 choices[56][2] = "El cable UTP de categor&iacute;a 3";
 choices[56][3] = "El cable STP de 150Ohm";
 answers[56] = 1;
 units[56] = ['104'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5152. ";
 preguntaids[56] = 5152


//  Id pregunta: 1102 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio El electr&oacute;nico, en el art&iacute;culo 45 detalla la prescripci&oacute;n para las sanciones e infracciones. Se&ntilde;ale la respuesta correcta:";
 choices[57]= new Array();
 choices[57][0] = "Las infracciones muy graves prescribir&aacute;n a los 3 a&ntilde;os, las graves al a&ntilde;o y las leves a los 6 meses.";
 choices[57][1] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves a los seis meses.";
 choices[57][2] = "Las infracciones muy graves prescribir&aacute;n a los 5 a&ntilde;os, las graves a los 3 a&ntilde;os y las leves al a&ntilde;o.";
 choices[57][3] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves al a&ntilde;o.";
 answers[57] = 3;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 1102. ";
 preguntaids[57] = 1102


//  Id pregunta: 7488 Año de creación de pregunta: 2010
 questions[58]= "59)  La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[58]= new Array();
 choices[58][0] = "Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[58][1] = "Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[58][2] = "Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[58][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[58] = 2;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7488. Map 2005";
 preguntaids[58] = 7488


//  Id pregunta: 9263 Año de creación de pregunta: 2014
 questions[59]= "60)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[59]= new Array();
 choices[59][0] = "ACSE (Association Control Service Element).";
 choices[59][1] = "RTSE (Reliable Transfer Service Element).";
 choices[59][2] = "ROSE (Remote Operation Service Element).";
 choices[59][3] = "ATSE (Application Transfer Service Element).";
 answers[59] = 0;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 9263. ";
 preguntaids[59] = 9263


//  Id pregunta: 1253 Año de creación de pregunta: 2016
 questions[60]= "61)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[60]= new Array();
 choices[60][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[60][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[60][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[60][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[60] = 2;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 1253. ";
 preguntaids[60] = 1253


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[61]= "62)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[61]= new Array();
 choices[61][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[61][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[61][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[61][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[61] = 3;
 units[61] = ['11'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 324. Presupuestos generales";
 preguntaids[61] = 324


//  Id pregunta: 2898 Año de creación de pregunta: 2002
 questions[62]= "63)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[62]= new Array();
 choices[62][0] = "De verificaci&oacute;n.";
 choices[62][1] = "De descubrimiento.";
 choices[62][2] = "De predicci&oacute;n.";
 choices[62][3] = "De validaci&oacute;n.";
 answers[62] = 3;
 units[62] = ['72', '73'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2898. ";
 preguntaids[62] = 2898


//  Id pregunta: 5404 Año de creación de pregunta: 2006
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[63]= new Array();
 choices[63][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX &oacute; SOH al comienzo de la trama y un car&aacute;cter ETX &oacute; ETB al final de la trama";
 choices[63][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control";
 choices[63][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack";
 choices[63][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras";
 answers[63] = 2;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5404. Control WACK :Wait After ACK";
 preguntaids[63] = 5404


//  Id pregunta: 7557 Año de creación de pregunta: 2010
 questions[64]= "65)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[64]= new Array();
 choices[64][0] = "DSSS.";
 choices[64][1] = "FHSS.";
 choices[64][2] = "OFDM.";
 choices[64][3] = "DWDM.";
 answers[64] = 2;
 units[64] = ['108'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 7557. Map 2005";
 preguntaids[64] = 7557


//  Id pregunta: 2213 Año de creación de pregunta: 2002
 questions[65]= "66)  La caracter&iacute;stica que poseen los sistemas abiertos de permitir la utilizaci&oacute;n del mismo entorno de &quot;software&quot; en diferentes equipos f&iacute;sicos, desde ordenadores personales hasta grandes ordenadores, se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Conectividad";
 choices[65][1] = "Integrabilidad";
 choices[65][2] = "Escalabilidad";
 choices[65][3] = "Interoperabilidad";
 answers[65] = 2;
 units[65] = ['43'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2213. ";
 preguntaids[65] = 2213


//  Id pregunta: 2491 Año de creación de pregunta: 2004
 questions[66]= "67)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[66]= new Array();
 choices[66][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[66][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE";
 choices[66][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[66][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[66] = 3;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 2491. Similar a examen TIC SS A 2003";
 preguntaids[66] = 2491


//  Id pregunta: 6755 Año de creación de pregunta: 2009
 questions[67]= "68)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[67]= new Array();
 choices[67][0] = "16";
 choices[67][1] = "24";
 choices[67][2] = "32";
 choices[67][3] = "64";
 answers[67] = 0;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 6755. MAP 2008 A1";
 preguntaids[67] = 6755


//  Id pregunta: 9383 Año de creación de pregunta: 2014
 questions[68]= "69)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[68]= new Array();
 choices[68][0] = "Red A.";
 choices[68][1] = "Red B.";
 choices[68][2] = "Red C.";
 choices[68][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[68] = 1;
 units[68] = ['109'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 9383. Examen TIC A2  2013";
 preguntaids[68] = 9383


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes es un framework de pruebas para JavaScript?";
 choices[69]= new Array();
 choices[69][0] = "ScriptTester.";
 choices[69][1] = "Jspector.";
 choices[69][2] = "JavaTester.";
 choices[69][3] = "Qunit.";
 answers[69] = 3;
 units[69] = ['92'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 830. AGE A2 2015";
 preguntaids[69] = 830


//  Id pregunta: 7720 Año de creación de pregunta: 2010
 questions[70]= "71)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivel que realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el:";
 choices[70]= new Array();
 choices[70][0] = "Nivel 2.";
 choices[70][1] = "Nivel 3.";
 choices[70][2] = "Nivel 4.";
 choices[70][3] = "Nivel 5.";
 answers[70] = 1;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7720. Map 2007";
 preguntaids[70] = 7720


//  Id pregunta: 10970 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n la ley 19/2013 de transparencia y en lo relativo al ejercicio del derecho de acceso de la informaci&oacute;n p&uacute;blica, se&ntilde;ale la FALSA:";
 choices[71]= new Array();
 choices[71][0] = "Ser&aacute;n motivadas las resoluciones que denieguen el acceso, las que concedan el acceso parcial o a trav&eacute;s de una modalidad distinta a la solicitada y las que permitan el acceso cuando haya habido oposici&oacute;n de un tercero.";
 choices[71][1] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[71][2] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica no agotan la v&iacute;a administrativa y a&uacute;n son recurribles en alzada ante el Secretario de Estado de Funci&oacute;n P&uacute;blica.";
 choices[71][3] = "El plazo para resolver una solicitud de acceso ser&aacute; de un mes ampliable otro mes si as&iacute; fuera necesario.";
 answers[71] = 2;
 units[71] = ['22'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 10970. ";
 preguntaids[71] = 10970


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el Real Decreto Legislativo 3/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley de Empleo, son instrumentos de coordinaci&oacute;n del Sistema Nacional de Empleo los siguientes. Se&ntilde;ale la falsa:";
 choices[72]= new Array();
 choices[72][0] = "La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo";
 choices[72][1] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 choices[72][2] = "Los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[72][3] = "El Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo";
 answers[72] = 1;
 units[72] = ['15'];
 blocks[72] = ['A3'];
 comments[72] = "Id Pregunta: 427. Modelo econ&oacute;mico";
 preguntaids[72] = 427


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[73]= "74)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[73]= new Array();
 choices[73][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[73][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[73][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[73][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[73] = 0;
 units[73] = ['5'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 172. Uni&oacute;n Europea";
 preguntaids[73] = 172


//  Id pregunta: 1323 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as agiles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[74]= new Array();
 choices[74][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[74][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[74][2] = "EI software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[74][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[74] = 2;
 units[74] = ['84'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 1323. ";
 preguntaids[74] = 1323


