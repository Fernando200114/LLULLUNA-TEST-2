import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function MathTotalScreen() {
    const [amount, setAmount] = React.useState("0");
    const [taxPct, setTaxPct] = React.useState("12");
    const [hasTip, setHasTip] = React.useState(false);

    const a = Number(amount || 0);
    const t = Number(taxPct || 0) / 100;

    const result = React.useMemo(() => {

        if (a <= 0) return { subtotal: 0, tax: 0, tip: 0, total: 0 };

        const iva = a * t;
        const tip = hasTip ? a * 0.10 : 0;


        const subtotal = a + iva;
        const total = subtotal + tip;

        const money = (n: number) => n.toFixed(2);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Math 3 — Recargos y Descuentos</Text>
                <Text style={styles.subtitle}>
                    monto + recargo + ajuste − descuento
                </Text>

                <View style={styles.card}>
                    <Text style={styles.label}>Monto base</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Meses de atraso</Text>
                    <TextInput
                        value={taxPct}
                        onChangeText={setTaxPct}
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <View style={styles.switchRow}>
                        <Text style={styles.label}>Incluir Propina</Text>
                        <Switch
                            value={hasTip}
                            onValueChange={setHasTip}
                        />
                    </View>

                    <Text style={styles.label}>Método de pago</Text>
                    <Picker
                        selectedValue={total}
                        onValueChange={(v) => (v)}
                    >
                        <Picker.Item label="0%" value="Efectivo" />
                        <Picker.Item label="12%" value="Tarjeta" />
                        <Picker.Item label="13%" value="Transferencia" />
                    </Picker>
                </View>

                <View style={styles.card}>
                    <Text style={styles.rline}>Subtotal:        (result.iva)</Text>
                    <Text style={styles.rline}>Recargo mora:    (result.recargo)</Text>
                    <Text style={styles.rline}>Descuento:      -$(result.descuento)</Text>

                </View>
            </View>
        );
    }
   
    const styles = StyleSheet.create({
        container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
        title: { fontSize: 22, fontWeight: "900" },
        subtitle: { marginTop: 4, color: "#555", fontWeight: "700" },
        card: {
          backgroundColor: "white",
          padding: 14,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,.10)",
          marginTop: 12,
        },
        label: { marginTop: 8, color: "#666", fontWeight: "800" },
        input: {
          marginTop: 6,
          backgroundColor: "#fff",
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,.10)",
        },
        switchRow: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 12,
        },
        rline: { fontWeight: "800", marginTop: 6 },
        total: { fontWeight: "900", marginTop: 10, fontSize: 18, color: "#1976d2" },
      });