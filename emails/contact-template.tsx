import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de {name} desde tu portfolio</Preview>
      <Body style={main}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={brandTag}>&lt;lukedev/&gt;</Text>
            <Text style={headerSubtitle}>Nuevo mensaje desde tu portfolio</Text>
          </Section>

          {/* Divider line */}
          <Section style={accentBar} />

          {/* Sender info */}
          <Section style={metaSection}>
            <Row>
              <Column style={metaCol}>
                <Text style={metaLabel}>Nombre</Text>
                <Text style={metaValue}>{name}</Text>
              </Column>
              <Column style={metaCol}>
                <Text style={metaLabel}>Email</Text>
                <Text style={metaValueLink}>
                  <a href={`mailto:${email}`} style={link}>{email}</a>
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* Message */}
          <Section style={messageSection}>
            <Text style={messageLabel}>Mensaje</Text>
            <Text style={messageBody}>{message}</Text>
          </Section>

          <Hr style={divider} />

          {/* Reply CTA */}
          <Section style={ctaSection}>
            <Text style={ctaText}>
              Respondé directamente a este email o hacé click para escribirle a{" "}
              <a href={`mailto:${email}`} style={link}>{name}</a>.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Este mensaje fue enviado desde el formulario de contacto de{" "}
              <span style={footerBrand}>lucaspereyradev.github.io/portfolio</span>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

export default ContactEmail

// ─── Styles ──────────────────────────────────────────────────────────────────

const main: React.CSSProperties = {
  backgroundColor: "#f7f7f7",
  fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  padding: "40px 0",
}

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "560px",
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
}

const header: React.CSSProperties = {
  padding: "32px 40px 24px",
  backgroundColor: "#ffffff",
}

const brandTag: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#111111",
  margin: "0 0 6px",
  letterSpacing: "-0.5px",
}

const headerSubtitle: React.CSSProperties = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  fontWeight: "400",
}

const accentBar: React.CSSProperties = {
  backgroundColor: "#10b981",
  height: "3px",
  margin: "0",
}

const metaSection: React.CSSProperties = {
  padding: "24px 40px 0",
}

const metaCol: React.CSSProperties = {
  width: "50%",
  verticalAlign: "top",
  paddingRight: "12px",
}

const metaLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#9ca3af",
  margin: "0 0 4px",
}

const metaValue: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#111111",
  margin: "0",
}

const metaValueLink: React.CSSProperties = {
  ...metaValue,
}

const link: React.CSSProperties = {
  color: "#10b981",
  textDecoration: "none",
  fontWeight: "600",
}

const divider: React.CSSProperties = {
  borderColor: "#e5e7eb",
  margin: "20px 40px",
}

const messageSection: React.CSSProperties = {
  padding: "0 40px",
}

const messageLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#9ca3af",
  margin: "0 0 10px",
}

const messageBody: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#374151",
  margin: "0",
  backgroundColor: "#f9fafb",
  borderLeft: "3px solid #10b981",
  borderRadius: "0 6px 6px 0",
  padding: "14px 16px",
}

const ctaSection: React.CSSProperties = {
  padding: "0 40px",
}

const ctaText: React.CSSProperties = {
  fontSize: "13px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.6",
}

const footer: React.CSSProperties = {
  padding: "20px 40px 28px",
  backgroundColor: "#f9fafb",
  borderTop: "1px solid #e5e7eb",
  marginTop: "24px",
}

const footerText: React.CSSProperties = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
  textAlign: "center" as const,
}

const footerBrand: React.CSSProperties = {
  color: "#10b981",
  fontWeight: "600",
}
