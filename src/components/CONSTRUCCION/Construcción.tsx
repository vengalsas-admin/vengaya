export default function CONSTRUCCION() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Página en construcción 🚧</h1>
      <p style={styles.text}>
        Estamos trabajando para ofrecerte una mejor experiencia. Vuelve pronto.
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: '100dvh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    textAlign: 'center' as const,
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#000',
  },
  text: {
    fontSize: '1rem',
    color: '#191919',
  },
};
