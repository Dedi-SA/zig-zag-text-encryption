    const mirrorBox = [
        [...'w&{a0~<h3r#U;P8=-Do^eH1M@Am/QO_9xtjLF.C7?]X\'qIc+2f%v}k:Y`>bVp J*RN)zn!"ZBuE|4[Ws(TKy$G6i,dSlg5'], // [0]  A
        [...'>Qk[Go"1#<y5)A3Lf?mv$TJX aN-zt}8O=%4~RhD/^|YM!nHUr*,cB7u2j\'gl&_qVbx`9]CW:iK;{sFPSI+w@6eZ0.(pEd'], // [1]  B
        [...'Jt{Ph5,Sy(p#DUoLzcY72~F\'NwQ?]AHk<3bEre@_;x"n%6Tu)R1M=. K9^fW!Bq:j}$Xd-[lI0g8&vZs`OG4/mi*>CaV|+'], // [2]  C
        [...'Yh{Q<aoE&w72])jbf"Jr%u6[3N,FPT@}K^.8-pV*?Oi0!AkyC4 vm\'$BU9|+/Z(LS_~tWcqGI5:nxsd=HM;z1D>#Rg`lXe'], // [3]  D
        [...'4yl<5!Bm)\'gT}-2OfXMrIa{+:wD%jWG9c`p,u #R/N*x;L$S_?V~o@k]7b"vq(etJZCQh=3HzAYF^>PU6|.1dn0[s8&iKE'], // [4]  E
        [...'Iz)Wd7/jpDa(m"ZxT]P#9`3ChV;G_fl+yM wrNB%-UR~n*4tJcv\'1L=}0eQ>:$OqY@E^<8K[As!ioFXk,g6{|?.u5S&2Hb'], // [5]  F
        [...'ftEc9%RvkKn(P>q3hJ;4uA`._ma5$)-S0sO#Ww1]\'H<LCV7*,e{i=IDzZ@p[g~T&BrlY:6UxjN+y!o|XQ2?M^}8G "dF/b'], // [6]  G
        [...'g6SCsxn<W%O5DXhqy-I)f~:P?=avM^U3rJkA;>te&w[1iTGb8L/FQ+0u*d7_K4@Z`B\'zl("oR{#cN}.m !Y$H2E]9,pVj|'], // [7]  H
        [...'vdMl/E*w1Wh7H%{y:,KnBaxf8P@X]LF(+3^kq!_A>Gmi. Q;`&24c}T9[Je~N\'s)YjS?5r$-0bt"R|=oICZ<U6gOVzD#pu'], // [8]  I
        [...'%eXVo8Tb, +Yh<]G^1S(0t\'H-p|kL#_7fAuMc26;>vO@g[z?IE)C~{drUjB`lFaNWw}JQ:s!3qP&9nD5x"R$Km.*i=Zy/4'], // [9]  J
        [...'EQ?^9nJa3~B<tm;j|@y\'&h-CH>bLuT*O_4 Z16r`z#8kDf:)F]Y[cUs(0l2$,o!G5KPVSXw.qiI}dM=7gx+e{N%"v/RApW'], // [10] K
        [...'&26k<F\'*uXq(G1Ya%l B=Z8^5~{,HiVzO}s?WC+"ex7Tw>]dPUv[DoL4c|EQ9f!br@K_R;ym-#ASh:pInM3/$Jg)jN.`0t'], // [11] L
        [...'2htU0K5f!E:uweFi/Q&Tl)Lrv;Po<{B1a^J}AgX@Gs4~N.Y(7V`nRq]#b\'WO*k6_,SCZH-"=>$cxpmI?+3D%d [yM9jz8|'], // [12] M
        [...'l>3yIe0#<V}+mzJ`a1W|[$tT.rPi%E~{xc!8,K=Q2"uFo7@:NsjO-f6GRB)pZn]/?SHb*CLA4k_Y(vdM&qD\'X wg^U;59h'], // [13] N
        [...'7kX$[0`nMrZa@1h%8lY}Q"#sC_L|oB=4{^t9F,)KV~P.EH-ux(?5wTGD zO>Ue6!bR/]I\'&2Ay:iSpv;*mJdfq+<3NjWcg'], // [14] O
        [...'j8dF:#JVf(x39"}n,uC4!KcykW{6D5[\'L.G`ZhNb=z@g>T~XEO*l 7]UeA&PSpYM%i/_Q+m?Bo)$1vRrqH;aw|2-<I^0ts'], // [15] P
        [...' GYZi3W14,a(0T_.kv"*HFVx@/K2n#Ee?U[-NX~8wj5o\'9clfty;`)Op>&|uPIzCLA%!b{Q]J=$6mr<+Dd7B^sqRMgSh:}'], // [16] Q
        [...'_J<3=f&t%OX6Vc>7A^KY)]4;r-{d"gmsT#wz15uxWPe8E|k(:yp9+},UL2$Zl ?Qv@/M0*.iBRjHN~DS[ah`FICbn!qo\'G'], // [17] R
        [...'naC84msPbl+|Gp?}VM^2xcWk@N<T3Q9&/v._H[DUO`y5dq!=EIXjzFw\'e7*Y)RJo-]r:Ai"ZS>(6tf10%#,~BK{hu;g L$'], // [18] S
        [...'jR}TV5&0a,tpl.SU%L{9WbBr|"$MD26 C-uI/kN_x?4Y^q@cOgy)\'m3#E=Zsv:z!`dFJ1>f;+[Hh7A*Xw~nKQe]<8Gi(oP'], // [19] T
        [...'8 r6oUL^C.4zV#u}apE_OsY|`5&/"nfPF)cA~3=@MJtqDRK,j*9{x:BZNW]gSeH>(kyQ[1d-7;Ih$2+lb!X<?Twi0G%\'vm'], // [20] U
        [...'a\'3~I9y"bY(gz,lAtp}ZOD/>d{01&Uu?.E H2j@*:hm+6$MTP[vJ7o`qe%QNWrFwk!-VnLG^s4<8Rxc=KBS#]5X)Ci_f|;'], // [21] V
        [...'5? jE}{bO%zC\'x"pfP#D3n:X(_$;L=yhI7U8`+wa*YdR<~4BJ[!t]qQo^HVKm)>-6uS&iWrv1GN2k,TcsZgl.AMF|/e09@'], // [22] W
        [...';rDn+#O4uwVE"!ayC:$KzW.o1<3@9R-s[lc2vIT7L)Q0t_A`=pU?JY~mx}NhB,G^{ /M*8qb5(j|HSeX%>dk6\'PZf]&iFg'], // [23] X
        [...'_iPZ<=zD@b^sHpM"Q!A7m3f{a4EqX;T[I1C`wjYn2tU?Nd:r(6/gF+8] &k\'R9oK*xyVO>$,S0u|LG#v5.cJ~We)lB%h}-'], // [24] Y
        [...'p5VXtDr6:xbJ~S-hmK%Y{TqBW`yU $jv]<1C,ez7_}Fn#>2a(s\'E|Ow?&Q=8Ro9*P+04L@M";i.k^Gdu[!fNHc)lIZ/g3A'], // [25] Z
    ];


    

        /*
            To Check is variable 'mirrorBox' is valid or not
            
            If there found invalid element, 'mirrorBox' will be considered invalid,
            and the function will return : [false, [index number of the invalid]]

            If there is no invalid element found, 'mirrorBox' will be considered valid,
            and the function will return : [true, []]
        */

    const   isValidMirrorBox = () => {
                if (Array.isArray(mirrorBox) && mirrorBox.length > 0) {
                    
                    // Checking every element of mirrorBox
                    // When there is found one element is invalid, then mirrorBox also invalid
                    for(let i = 0; i < mirrorBox.length; i++) {
                        if (isValidKey(mirrorBox[i]) === false) {
                            return false;
                        }
                    }
                    return true;
                }
                else {
                    return false;
                }
            }